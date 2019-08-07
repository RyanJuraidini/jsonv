"""
Author     : Vaibhav Jain, Michael Carey, Paul Sulewski

Date       : 6/4/2019

Description: This tool reads in a valid yaml file for VES 5.3 formatted fault data and/or performance data and outputs the contents into two Excel
             spreadsheets, one for FM and one for PM.

Inputs     : YAML file name (with full path) (defaults to YamlUnderTest.yml)
             Excel spreadsheet name for FM (with full path, but without file extension) (defaults to AlarmSpreadsheet)
             Excel spreadsheet name for PM (with full path, but without file extension) (defaults to MeasurementSpreadsheet)
             Text file containing the alarm attributes to include in the FM spreadsheet (yamlAttributes.txt). Note that the measurement attributes
             included in the PM spreadsheet are not configurable.
			 
Outputs    : Alarms/events Excel spreadsheet
             Measurements Excel spreadsheet
"""

import sys
import re
import time
import yaml
from xlrd import open_workbook
from openpyxl import Workbook

################################################################################################################################################################

start = time.time()
eventid=[]
commonHeader = []
faultFields = []
addInfoFields = []
dataRow = []
processedFmEvents = 0
processedPmEvents = 0

try: yamlFilepath = input("Please enter the full path with name for YAML file (default = YamlUnderTest.yml):    ")
except EOFError: yamlFilepath = ""
if yamlFilepath == "": yamlFilepath = "YamlUnderTest.yml"
try: outputNameFm = input("Please enter the full path of FM output file (default = AlarmSpreadsheet):    ")
except EOFError: outputNameFm = ""
if outputNameFm == "": outputNameFm = "AlarmSpreadsheet"
try: outputNamePm = input("Please enter the full path of PM output file (default = MeasurementSpreadsheet):    ")
except EOFError: outputNamePm = ""
if outputNamePm == "": outputNamePm = "MeasurementSpreadsheet"
print("\n")
print("Please wait... reading YAML file............\n\n")

stream = open(yamlFilepath, "r")
docs = yaml.load_all(stream)
outputAttrFile = open("yamlAttributes.txt", "r")
for line in outputAttrFile:
    fields = line.strip().split()
    #print fields,
    if fields[0] == "{commonHeader}":
        commonHeader = fields
        commonHeader.remove('{commonHeader}')
    elif fields[0] == "{faultFields}":
        faultFields = fields
        faultFields.remove('{faultFields}')
    elif fields[0] == "{alarmAdditionalInformation}":
        addInfoFields = fields
        addInfoFields.remove('{alarmAdditionalInformation}')

#write out header row
bookFm = Workbook()
sheetFm = bookFm.active
headerRow = commonHeader+faultFields+addInfoFields
sheetFm.append(headerRow)

bookPm = Workbook()
sheetPm = bookPm.active
headerRow = ("eventName", "MeasGroupName", "MeasName or KeyName", "Range")
sheetPm.append(headerRow)

for doc in docs:
    for k,v in doc.items():
        if v["structure"]["commonEventHeader"]["structure"]["domain"]['value'] == "fault" :
            value = v["structure"]["commonEventHeader"]["structure"]["eventName"]['value']
            eventid.append(value)
            """
            commonEventHeader fields
            """
            for ch in commonHeader:
                try:
                    ch_val = v["structure"]["commonEventHeader"]["structure"][ch]['value']
                except:
                    dataRow.append(ch+" not in yaml")
                else:
                    dataRow.append(str(ch_val))
            		
            """
            faultFields fields
            """
            for ff in faultFields:
                try:
                    ff_val = v["structure"]["faultFields"]["structure"][ff]['value']
                except:
                    dataRow.append(ff+" not in yaml")
                else:
                    dataRow.append(str(ff_val))
	   
            """
            alarmAdditionalInformation fields - search through the additionalInformation fields array and output the appropriate values
            """
            if len(addInfoFields) > 0 :  
                try:
      	       	    yamlAddInfoFieldArrayLength = len(v["structure"]["faultFields"]["structure"]["alarmAdditionalInformation"]["array"])
                except:
                    yamlAddInfoFieldArrayLength = 0
                for ai in addInfoFields:
                    for x in range(0,yamlAddInfoFieldArrayLength):
                        try:
                            aif_name = v["structure"]["faultFields"]["structure"]["alarmAdditionalInformation"]["array"][x]["field"]["structure"]["name"]['value']
                        except:
                            dataRow.append(ai+" not in yaml")
                        else:
                            if aif_name == ai:
                                try:
                                    aif_value = str(v["structure"]["faultFields"]["structure"]["alarmAdditionalInformation"]["array"][x]["field"]["structure"]["value"]['value'])
                                except:
                                    dataRow.append(ai+" not in yaml")
                                else:
                                    dataRow.append(aif_value)
            """
            output completed data row.
            """
            #output dataRow
            sheetFm.append(dataRow)
            dataRow = [] #reinitialize 
            processedFmEvents += 1

        elif v["structure"]["commonEventHeader"]["structure"]["domain"]['value'] == "measurementsForVfScaling" :
            eventName = v["structure"]["commonEventHeader"]["structure"]["eventName"]['value']
            processedPmEvents += 1

            """
            measurementsForVfScalingFields fields
            """
            #Determine the structure of the measurements event
            try:
                if v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalMeasurements"] :
                    additionalMeasurements = True
            except:
                additionalMeasurements = False
            try:
                if v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalObjects"] : 
                    additionalObjects = True
            except:
                additionalObjects = False
            if not additionalMeasurements and not additionalObjects :
                print("EventName: ", eventName, "contains no measurements\n")
            if additionalMeasurements : 			
                """
                additionalMeasurements is an array and can contain multiple measurement groups
                """
                try:
      	       	    additionalMeasurementsArrayLength = len(v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalMeasurements"]["array"])
                except:
                    additionalMeasurementsArrayLength = 0 
                for x in range(0,additionalMeasurementsArrayLength):
                    try:
                        measGroupName = v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalMeasurements"]["array"][x]["namedArrayOfFields"]["structure"]["name"]['value']
                    except:
                        measGroupName = "Meas Group Name not in yaml"
                    try:
                        countersArrayLength = len(v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalMeasurements"]["array"][x]["namedArrayOfFields"]["structure"]["arrayOfFields"]["array"])
                    except:
                        countersArrayLength = 0
                    for y in range(0,countersArrayLength):
                        try:
                            measName = v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalMeasurements"]["array"][x]["namedArrayOfFields"]["structure"]["arrayOfFields"]["array"][y]["field"]["structure"]["name"]['value']
                            try:
                                measRange = str(v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalMeasurements"]["array"][x]["namedArrayOfFields"]["structure"]["arrayOfFields"]["array"][y]["field"]["structure"]["value"]['range'])
                            except:
                                measRange = "range not provided in yaml"
                        except:
                            dataRow.append(str(y)+" not in yaml")
                        else:
                            dataRow.append(eventName)
                            dataRow.append(measGroupName)
                            dataRow.append(measName)
                            dataRow.append(measRange)
                        #output dataRow
                        sheetPm.append(dataRow)
                        dataRow = [] #reinitialize 
            if additionalObjects :			
                """
                additionalObjects is an array and can contain multiple measurement groups
                """
                try:
      	       	    additionalObjectsArrayLength = len(v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalObjects"]["array"])
                except:
                    additionalObjectsArrayLength = 0
                for x in range(0,additionalObjectsArrayLength):
                    try:
                        measGroupName = v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalObjects"]["array"][x]["jsonObject"]["structure"]["objectName"]['value']
                    except:
                        measGroupName = "Meas Group Name not in yaml"

                    try:
                        keysArrayLength = len(v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalObjects"]["array"][x]["jsonObject"]["structure"]["objectInstances"]["array"][0]["jsonObjectInstance"]["structure"]["objectKeys"]["array"])
                    except:
                        keysArrayLength = 0
                    for y in range(0,keysArrayLength):
                        try:
                            keyName = v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalObjects"]["array"][x]["jsonObject"]["structure"]["objectInstances"]["array"][0]["jsonObjectInstance"]["structure"]["objectKeys"]["array"][y]["key"]["structure"]["keyName"]['value']
                        except:
                            dataRow.append(str(x)+" not in yaml")
                        else:
                            dataRow.append(eventName)
                            dataRow.append(measGroupName)                    
                            dataRow.append(keyName+" (KEY ATTR)")
                        #output dataRow
                        sheetPm.append(dataRow)
                        dataRow = [] #reinitialize 

                    try:
      	       	        countersArrayLength = len(v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalObjects"]["array"][x]["jsonObject"]["structure"]["objectInstances"]["array"][0]["jsonObjectInstance"]["structure"]["objectInstance"]["structure"]["counters"]["array"])
                    except:
                        countersArrayLength = 0
                    for y in range(0,countersArrayLength):
                        try:
                            measName = v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalObjects"]["array"][x]["jsonObject"]["structure"]["objectInstances"]["array"][0]["jsonObjectInstance"]["structure"]["objectInstance"]["structure"]["counters"]["array"][y]["field"]["structure"]["name"]['value']
                            try:
                                measRange = str(v["structure"]["measurementsForVfScalingFields"]["structure"]["additionalObjects"]["array"][x]["jsonObject"]["structure"]["objectInstances"]["array"][0]["jsonObjectInstance"]["structure"]["objectInstance"]["structure"]["counters"]["array"][y]["field"]["structure"]["value"]['range'])
                            except:
                                measRange = "range not in yaml"
                        except:
                            dataRow.append(str(y)+" not in yaml")
                        else:
                            dataRow.append(eventName)
                            dataRow.append(measGroupName)
                            dataRow.append(measName)
                            dataRow.append(measRange)
                        #output dataRow
                        sheetPm.append(dataRow)
                        dataRow = [] #reinitialize
        else:
            pass


bookFm.save(outputNameFm+'.xlsx')
bookPm.save(outputNamePm+'.xlsx')

print("total number of alarm events in YAML is :::::::::::::    " + str(processedFmEvents))
print("total number of measurement events in YAML is :::::::::::::    " + str(processedPmEvents))
print("\n")


stream.close()
print("###########   Reached end of Script ###########")
sys.exit()
############################### END ################ OF ##################### SSCRIPT ##########################################################################
