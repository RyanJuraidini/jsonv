"""
Author     : Paul Sulewski

Date       : 8/2/2019

Description: This tool reads in a YAML file, checks the syntax, and outputs the first of any errors found

Inputs     : YAML file (YamlUnderTest.yml)
			 
Outputs    : Text file (TestYamlSyntaxOutput.txt) with first syntax error found (empty file if all YAML documents pass syntax checking)
"""

#! python3
import yaml
import sys
import glob
import os

sys.tracebacklimit = None
orig_stdout = sys.stdout
orig_stderr = sys.stderr

f = open('/var/www/html/ValidatorTEST/django/buttonpython/media/txtout/TestYamlSyntaxOutput.txt', 'w')
sys.stdout = f
sys.stderr = f

numdoc = 0
list_of_files = glob.glob('/var/www/html/ValidatorTEST/django/buttonpython/media/*.yml') 
# * means all if need specific format then *.json(THIS WORKS!!!)
latest_file = max(list_of_files, key=os.path.getctime)
#print latest_file
stream = open(latest_file, 'r')
docs = yaml.load_all(stream)
try:
    for doc in docs:
        numdoc += 1
        DataMap = doc
        print("YAML document #",numdoc,"passes syntax checking")
except yaml.YAMLError as e:
    print('yaml.parser.ParserError:',e)
except Exception as e:
    print('unexpected error: {0}',e)

sys.stdout = orig_stdout
sys.stderr = orig_stderr
f.close()
