from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.files.storage import FileSystemStorage
from django.conf import settings  
import requests
import sys
from subprocess import run,PIPE

def button(request):

    return render(request,'index.php')

#def external(request):
 #   out= run([sys.executable,'//var//www//html//ValidatorTEST//python_tester//TestJsonSyntax.py'],shell=False,stdout=PIPE)
  #  print(out)
   # return render(request,'index.php',{'data1':out.stdout})

def Home(TemplateView):
    template_name = 'index.php'
    
def jsonsyn(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['documentjssyn']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    out= run([sys.executable,'//var//www//html//ValidatorTEST//python_tester//TestJsonSyntax.py'],shell=False,stdout=PIPE)
    print(out)
    return render(request,'index.php')

def jsonschm(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['documentjsschm']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    out= run([sys.executable,'//var//www//html//ValidatorTEST//validate_schemas//ValidateJsonAgainstSchema.py'],shell=False,stdout=PIPE)
    print(out)
    return render(request,'index.php')

def yamlsyn(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['documentymlsyn']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    out= run([sys.executable,'//var//www//html//ValidatorTEST//python_tester//TestYamlSyntax.py'],shell=False,stdout=PIPE)
    print(out)
    return render(request,'index.php')

def yamlschm(request):
    if request.method == 'POST':
        uploaded_file = request.FILES['documentymlschm']
        fs = FileSystemStorage()
        fs.save(uploaded_file.name, uploaded_file)
    out= run([sys.executable,'//var//www//html//ValidatorTEST//validate_schemas//ValidateYamlAgainstSchema.py'],shell=False,stdout=PIPE)
    print(out)
    return render(request,'index.php')

#def yamlsyn(request):
#    if request.method == 'POST':
 #       uploaded_file = request.FILES['documentymlsyn']
  #      fs = FileSystemStorage()
   #     fs.save(uploaded_file.name, uploaded_file)
#    out= run([sys.executable,'//var//www//html//ValidatorTEST//python_tester//TestYamlSyntax.py'],shell=False,stdout=PIPE)
  #  print(out)
   # return render(request,'index.php')


