from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.files.storage import FileSystemStorage
from django.conf import settings  
import requests
import sys
from subprocess import run,PIPE

def button(request):

    return render(request,'index.php')

def Home(TemplateView):
    template_name = 'index.php'
    
def jsonsyn(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['documentjssyn']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    out= run([sys.executable,'//var//www//html//ValidatorTEST//python_tester//TestJsonSyntax.py'],shell=False,stdout=PIPE)
    print(out)
    f = open('//var//www//html//ValidatorTEST//django//buttonpython//media//txtout//TestJsonSyntaxOutput.txt', 'r')
    file_content = f.read()
    f.close()
    context = {'txtout4jssyn': file_content}
    return render(request,'index.php', context)

def jsonschm(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['documentjsschm']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    out= run([sys.executable,'//var//www//html//ValidatorTEST//validate_schemas//ValidateJsonAgainstSchema.py'],shell=False,stdout=PIPE)
    print(out)
    f = open('//var//www//html//ValidatorTEST//django//buttonpython//media//txtout//ValidateJsonAgainstSchemaOutput.txt', 'r')
    file_content = f.read()
    f.close()
    context = {'txtout4jsschm': file_content}
    return render(request,'index.php', context)

def yamlsyn(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['documentymlsyn']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    out= run([sys.executable,'//var//www//html//ValidatorTEST//python_tester//TestYamlSyntax.py'],shell=False,stdout=PIPE)
    print(out)
    f = open('//var//www//html//ValidatorTEST//django//buttonpython//media//txtout//TestYamlSyntaxOutput.txt', 'r')
    file_content = f.read()
    f.close()
    context = {'txtout4ymlsyn': file_content}
    return render(request,'index.php', context)

def yamlschm(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['documentymlschm']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    out= run([sys.executable,'//var//www//html//ValidatorTEST//validate_schemas//ValidateYamlAgainstSchema.py'],shell=False,stdout=PIPE)
    print(out)
    f = open('//var//www//html//ValidatorTEST//django//buttonpython//media//txtout//ValidateYamlAgainstSchemaOutput.txt', 'r')
    file_content = f.read()
    f.close()
    context = {'txtout4ymlschm': file_content}
    return render(request,'index.php', context)



