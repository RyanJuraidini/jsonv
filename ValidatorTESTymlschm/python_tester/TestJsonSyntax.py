"""
Author     : Paul Sulewski

Date       : 5/29/2019

Description: This tool reads in a file containing JSON objects (in either beautified or minified format), checks the syntax, and outputs the
             first of any errors found

Inputs     : JSON file (JsonUnderTest.json)
			 
Outputs    : Text file (TestJsonSyntaxOutput.txt) which indicates the number of the JSON object and whether it passes or fails syntax
             checking. Syntax checking stops at the first error.
             Note that the line number reported in the error starts with the JSON object in the file that failed syntax checking.
"""

#! python3
import json
import sys
import glob
import os

_decoder = json.JSONDecoder()
_space = '\n'

def loads(s):
    while s:
        s = s.strip()
        try: obj,pos = _decoder.raw_decode(s)
        except json.decoder.JSONDecodeError as e:
            erroredDoc = numdoc + 1
            print("\nError found decoding JSON object #",erroredDoc,":",e)
            sys.exit(1)
        if not pos:
            print("error - no JSON object found")
            raise ValueError('no JSON object found at %i' % pos)
        yield obj
        s = s[pos:]

sys.tracebacklimit = None
orig_stdout = sys.stdout
orig_stderr = sys.stderr


f = open('/var/www/html/ValidatorTEST/django/buttonpython/media/txtout/TestJsonSyntaxOutput.txt', 'w')
sys.stdout = f
sys.stderr = f

list_of_files = glob.glob('/var/www/html/ValidatorTEST/django/buttonpython/media/*.json') 
# * means all if need specific format then *.json(THIS WORKS!!!)
latest_file = max(list_of_files, key=os.path.getctime)
#print latest_file

stream = open(latest_file, 'r')
docs = loads(stream.read())
numdoc = 0
for doc in docs:
    numdoc += 1
    print("JSON object #",numdoc,"passes syntax checking")

sys.stdout = orig_stdout
sys.stderr = orig_stderr
f.close()
