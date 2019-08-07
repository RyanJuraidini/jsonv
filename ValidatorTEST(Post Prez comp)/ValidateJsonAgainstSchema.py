"""
Author     : Paul Sulewski

Date       : 5/29/2019

Description: This tool reads in a file containing JSON objects (in either beautified or minified format) and a file containing the JSON schema
             to validate against, and outputs the first of any errors found.

Inputs     : JSON file (JsonUnderTest.json)
             JSON schema file (JsonSchema.json)
			 
Outputs    : Text file (ValidateJsonAgainstSchemaOutput.txt) with first syntax error found (empty file if all JSON objects in the file pass syntax checking)
"""

#! python3
import json
from jsonschema import Draft4Validator
import sys

_decoder = json.JSONDecoder()
_space = '\n'

def loads(s):
    while s:
        s = s.strip()
        try: obj, pos = _decoder.raw_decode(s)
        except json.decoder.JSONDecodeError as e:
            erroredDoc = numdoc + 1
            print('\nError found decoding JSON object #', erroredDoc, ':', e)
            sys.exit(1)
        if not pos:
            raise ValueError('no JSON object found at %i' % pos)
        yield obj
        s = s[pos:]

sys.tracebacklimit = None
orig_stdout = sys.stdout
orig_stderr = sys.stderr


f = open('ValidateJsonAgainstSchemaOutput.txt', 'w')
sys.stdout = f
sys.stderr = f

schemaFile = open("JsonSchema.json", 'r')
schema = json.loads(schemaFile.read())
validator = Draft4Validator(schema)
stream = open("JsonUnderTest.json", 'r')
docs = loads(stream.read())
numdoc = 0
for doc in docs:
    numdoc = numdoc + 1
    try: validator.validate(doc)
    except Exception as e:
        print('\nSchema validation failed for JSON object #%i:' % numdoc, e)
    else: print('JSON object #%i is valid' % numdoc)
    
sys.stdout = orig_stdout
sys.stderr = orig_stderr
f.close()
schemaFile.close()
stream.close()
