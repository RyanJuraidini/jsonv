"""
Author     : Paul Sulewski

Date       : 5/29/2019

Description: This tool reads in a file containing YAML documents and a file containing the JSON schema
             to validate against, and outputs any errors found.

Inputs     : YAML file (YamlUnderTest.json)
             JSON schema file (JsonSchema.json)
			 
Outputs    : Text file (ValidateYamlAgainstSchemaOutput.txt) with any validation errors found

Notes      : Set the verbose flag to True to see details of the validation process in the output file
             Set the checkOnlyFirstArrayItem to True to check only the first array item
"""

#! python3
import json
import yaml
import sys
import copy
import glob
import os

def checkObjectProperties(testDictionary,schemaKey):
#check the keys in testDictionary to see if they are contained in schema properties for schemaKey and if all required properties are present
    if verbose: print("Information: enter checkObjectProperties subroutine")
    try:
        requiredPropertiesOrig = schemaKey["required"]
        if verbose: print("Information: requiredPropertiesOrig",requiredPropertiesOrig)
        requiredProperties = copy.deepcopy(requiredPropertiesOrig)
    except:
        if verbose: print("Information: no required properties")
        requiredProperties = []
    if verbose: print("Information: required properties:",requiredProperties)
    for objectKey,objectValue in testDictionary.items():
        try:
            if objectKey in schemaKey["properties"]:
                if verbose: print("Information:",objectKey,"is in properties of schema")
                try: refValue = schemaKey["properties"][objectKey]["$ref"]
                except: definitionLocation = schemaKey["properties"][objectKey]
                else: definitionLocation = schema[refValue.split("/")[1]][refValue.split("/")[2]]
                processKeyWords(testDictionary[objectKey],objectKey,definitionLocation)
            else: print("Error:",objectKey,"is missing from properties of schema")
        except: print("Warning: parent object of",objectKey,"has no defined properties in schema")
        try:
            if testDictionary[objectKey]["presence"] == "optional":
                try:
                    if objectKey in schemaKey["required"]:
                        try: valueOfObject = objectValue["value"]
                        except: valueOfObject = "n/a"
                        print("Error: required property",objectKey,"in schema listed as optional in YAML. Note: the value in YAML for this objectKey is:",valueOfObject)
                except:
                    if verbose: print("Information: no required properties for parent object of",objectKey)
        except:
            if verbose: print("Information: no presence keyword for",objectKey)
        if verbose: print("Information: is",objectKey,"included in the required properties:",requiredProperties,"?",objectKey in requiredProperties)
        try: requiredProperties.remove(objectKey)
        except:
            if verbose: print("Information:",objectKey,"not required")
    if not requiredProperties == []: print("Error: the following required properties are missing from the YAML",requiredProperties)

def checkArrayItems(testDictionary,schemaKey):
#check the keys in testDictionary to see if they are contained in schema items for schemaKey
    if verbose: print("Information: enter checkArrayItems subroutine")
    for objectKey,objectValue in testDictionary.items():
        if verbose: print("Information: #/definitions/"+objectKey)
        if "#/definitions/"+objectKey in schemaKey["items"]["$ref"]:
            if verbose: print("Information:",objectKey,"is in items of schema")
            try: refValue = schemaKey["items"]["$ref"]
            except: definitionLocation = schemaKey["items"][objectKey]
            else: definitionLocation = schema[refValue.split("/")[1]][refValue.split("/")[2]]
            processKeyWords(testDictionary[objectKey],objectKey,definitionLocation)
        else: print("Error:",objectKey,"is missing from items of schema")

def compareValueTypeToSchemaType(simpleValue,objectName,schemaKey):
#check whether simpleValue is integer, float, or string and whether this type is consistent with the schema type
    if verbose: print("Information: enter compareValueTypeToSchemaType")
    if (schemaKey["type"] == "number" and (type(simpleValue) is float or type(simpleValue) is int)):
        if verbose: print("Information: data type of",objectName,"in JSON schema is number which is compatible with value type in YAML of",type(simpleValue))
    elif (schemaKey["type"] == "integer" and type(simpleValue) is int):
        if verbose: print("Information: data type of",objectName,"in JSON schema is integer which is compatible with value type in YAML of",type(simpleValue))
    else: print("Error: data type of",objectName,"in JSON schema is not compatible with a value type in the YAML of",type(simpleValue))

def checkValue(value,objectName,schemaKey):
#check to see whether the value in YAML is of right type per schema and if it is in the set of enumerated values (if provided in schema)
    if verbose: print("Information: enter checkValue subroutine")
    try: enumList = schemaKey["enum"]
    except:
        if verbose: print("Information: No values enumerated in the JSON schema for",objectName)
    else:
        if type(value) is list:
            if verbose: print("Information: the value is a list:",value)
            lengthOfList = len(value)
            for x in range(0,lengthOfList):
                if value[x] in enumList:
                    if verbose: print("Information: The value in the YAML of",value[x],"for",objectName,"is among the values enumerated in the JSON schema")
                else: print("Error: the value in the YAML of",value[x],"for",objectName,"is not among the values enumerated in the JSON schema")
        else:
            if value in enumList:
                if verbose: print("Information: The value in the YAML of",value,"for",objectName,"is among the values enumerated in the JSON schema")
            else: print("Error: the value in the YAML of",value,"for",objectName,"is not among the values enumerated in the JSON schema")
    try:
        if schemaKey["type"] == "array": print("Error: data type of",objectName,"in JSON schema is array and not compatible with a value in the YAML")
        elif schemaKey["type"] == "object": print("Error: data type of",objectName,"in JSON schema is object and not compatible with a value in the YAML")
        elif schemaKey["type"] == "string":
            if verbose: print("Information: data type of",objectName,"in JSON schema is string which is compatible with any value in the YAML")
        elif type(value) is list:
            if verbose: print("Information: the value is a list:",value)
            lengthOfList = len(value)
            for x in range(0,lengthOfList):
                compareValueTypeToSchemaType(value[x],objectName,schemaKey)
        elif type(value) is float or type(value) is str or type(value) is int: compareValueTypeToSchemaType(value,objectName,schemaKey)
        else: print("Error: data type of",objectName,"in JSON schema is",schemaKey["type"],"which is not compatible with a value type in the YAML of",type(value))
    except: print("Error: something went wrong while checking data type of",objectName)

def checkRange(value,objectName,schemaKey):
#check to see whether the range in YAML is of right type per schema
    if verbose: print("Information: enter checkRange subroutine")
    try:
        if schemaKey["type"] == "array": print("Error: data type of",objectName,"in JSON schema is array and not compatible with a value in the YAML")
        elif schemaKey["type"] == "object": print("Error: data type of",objectName,"in JSON schema is object and not compatible with a value in the YAML")
        elif schemaKey["type"] == "string":
            if verbose: print("Information: data type of",objectName,"in JSON schema is string which is compatible with any value in the YAML")
        elif type(value) is list:
            if verbose: print("Information: the range is a list:",value)
            lengthOfList = len(value)
            for x in range(0, lengthOfList):
                compareValueTypeToSchemaType(value[x],objectName,schemaKey)
        else: print("Error: data type of",objectName,"in JSON schema is",schemaKey["type"],"which is not compatible with a value type in the YAML of",type(value))
    except: print("Error: something went wrong while checking range data type for",objectName)

def processKeyWords(testDictionary,objectName,schemaSnippet):
#process the key words in testDictionary for objectName
    if verbose: print("Information: enter processKeyWords subroutine")
    for keyKeyWord,valueKeyWord in testDictionary.items():
        if keyKeyWord == "range":
            if verbose: print("Information: do range checking for",objectName)
            checkRange(valueKeyWord,objectName,schemaSnippet)
        if keyKeyWord == "value":
            if verbose: print("Information: do value checking for",objectName)
            checkValue(valueKeyWord,objectName,schemaSnippet)
        if keyKeyWord == "array":
            if verbose: print("Information: do array checking for",objectName)
            try: arrayLength=len(testDictionary[keyKeyWord])
            except: arrayLength=0
            if checkOnlyFirstArrayItem: arrayLength = 1
            for x in range(0,arrayLength):
                checkArrayItems(testDictionary[keyKeyWord][x],schemaSnippet)
        if keyKeyWord == "structure":
            if verbose: print("Information: do structure checking for",objectName)
            checkObjectProperties(testDictionary[keyKeyWord],schemaSnippet)

sys.tracebacklimit = None
orig_stdout = sys.stdout
orig_stderr = sys.stderr

verbose = False
checkOnlyFirstArrayItem = True

f = open('/var/www/html/ValidatorTEST/django/buttonpython/media/txtout/ValidateYamlAgainstSchemaOutput.txt', 'w')
sys.stdout = f
sys.stderr = f

if verbose: print("Informational messages as well as errors and warnings will be listed in output - to turn off informational messages set verbose to False")
else: print("Only errors and warnings will be listed in output - to turn on informational messages set verbose to True")

if checkOnlyFirstArrayItem: print("Checking only first array item in YAML - to check all array items set checkOnlyFirstArrayItem to False\n")
else: print("Checking all array items in YAML - to check only the first item set checkOnlyFirstArrayItem to True\n")

schemaFile = open("/var/www/html/ValidatorTEST/schemas/JsonSchema.json", 'r')
schema = json.loads(schemaFile.read())


list_of_files = glob.glob('/var/www/html/ValidatorTEST/django/buttonpython/media/*.yml') 
# * means all if need specific format then *.json(THIS WORKS!!!)
latest_file = max(list_of_files, key=os.path.getctime)
#print latest_file


stream = open(latest_file, 'r')
docs = yaml.load_all(stream.read())
for doc in docs:
    for k,v in doc.items():
        try: print("Validating YAML for eventName",v["structure"]["commonEventHeader"]["structure"]["eventName"]['value'],"against JSON schema")
        except: print("Error: eventName does not appear in YAML document")
        if k in schema["properties"]:
            if verbose: print("Information: value of root key in YAML:",k, "is in schema properties")
        processKeyWords(doc[k],k,schema["definitions"][k])
    print()
print("Validation of YAML documents is complete")
 
sys.stdout = orig_stdout
sys.stderr = orig_stderr
f.close()
schemaFile.close()
stream.close()
