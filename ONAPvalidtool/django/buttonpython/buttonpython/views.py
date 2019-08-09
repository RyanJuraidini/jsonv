"""

Edited By: Ryan Juraidini

Date: 8/8/19

Description: This is where I made functions in the django framework. They pass contents to the index.php file and then are excuted from the url designated in the "urls.py" file 

"""

from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.files.storage import FileSystemStorage
from django.conf import settings  
import requests
import sys
from subprocess import run,PIPE

"""

The following functions are for executing the action buttons in the webpage.
They upload the file from the user, excute the python script for the action desired for the users script, and finally displaying the txt file with the error message or lack of.

"""

def button(request):

    return render(request,'index.php')

#breakdown of function which applies for all the different action functions
def jsonsyn(request):
    #The following function uploads the file to the media folder
    if request.method == 'POST':
        uploaded_file = request.FILES['documentjssyn']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    #The following executes the python script for the action desired with the users file    
    out= run([sys.executable,'//var//www//html//ONAPvalidtool//syntaxcheck_pyfiles//TestJsonSyntax.py'],shell=False,stdout=PIPE)
    print(out)
    #lastly the following executes the displaying of text by passing the contents of the txt file output to the index.php page
    f = open('//var//www//html//ONAPvalidtool//django//buttonpython//media//txtout//TestJsonSyntaxOutput.txt', 'r')
    file_content = f.read()
    f.close()
    context = {'txtout4jssyn': file_content}
    return render(request,'index.php', context)

def jsonschm(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['documentjsschm']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    out= run([sys.executable,'//var//www//html//ONAPvalidtool//schemavalidate_pyfiles//ValidateJsonAgainstSchema.py'],shell=False,stdout=PIPE)
    print(out)
    f = open('//var//www//html//ONAPvalidtool//django//buttonpython//media//txtout//ValidateJsonAgainstSchemaOutput.txt', 'r')
    file_content = f.read()
    f.close()
    context = {'txtout4jsschm': file_content}
    return render(request,'index.php', context)

def yamlsyn(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['documentymlsyn']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    out= run([sys.executable,'//var//www//html//ONAPvalidtool//syntaxcheck_pyfiles//TestYamlSyntax.py'],shell=False,stdout=PIPE)
    print(out)
    f = open('//var//www//html//ONAPvalidtool//django//buttonpython//media//txtout//TestYamlSyntaxOutput.txt', 'r')
    file_content = f.read()
    f.close()
    context = {'txtout4ymlsyn': file_content}
    return render(request,'index.php', context)

def yamlschm(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['documentymlschm']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    out= run([sys.executable,'//var//www//html//ONAPvalidtool//schemavalidate_pyfiles//ValidateYamlAgainstSchema.py'],shell=False,stdout=PIPE)
    print(out)
    f = open('//var//www//html//ONAPvalidtool//django//buttonpython//media//txtout//ValidateYamlAgainstSchemaOutput.txt', 'r')
    file_content = f.read()
    f.close()
    context = {'txtout4ymlschm': file_content}
    return render(request,'index.php', context)



