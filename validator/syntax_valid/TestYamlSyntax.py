"""
Author     : Paul Sulewski

Date       : 5/29/2019

Description: This tool reads in a YAML file, checks the syntax, and outputs the first of any errors found

Inputs     : YAML file (YamlUnderTest.yml)
			 
Outputs    : Text file (TestYamlSyntaxOutput.txt) with first syntax error found (empty file if all YAML documents pass syntax checking)
"""

#! python3
import yaml
import sys

sys.tracebacklimit = None
orig_stdout = sys.stdout
orig_stderr = sys.stderr

f = open('TestYamlSyntaxOutput.txt', 'w')
sys.stdout = f
sys.stderr = f

stream = open("YamlUnderTest.yml", 'r')
docs = yaml.load_all(stream)
try:
    for doc in docs:
        DataMap = doc
except yaml.YAMLError as e:
    print('yaml.parser.ParserError:',e)
except Exception as e:
    print('unexpected error: {0}',e)

sys.stdout = orig_stdout
sys.stderr = orig_stderr
f.close()
