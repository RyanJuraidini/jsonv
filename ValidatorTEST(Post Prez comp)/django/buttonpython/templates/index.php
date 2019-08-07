  {% load static %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" type="image/png" href='/static/img/icons/favicon.ico' />

    <title>JSON Schema Validator</title>
    
    <link href='{% static "css/main.css" %}' rel="stylesheet"/>
        <!-- <link rel='stylesheet' href='/static/css/main.css' />-->
    
 <!--
            <script href="{% static 'javascript/p5.js' %}" type="text/javascript"></script>
            <script href="{% static 'javascript/p5.dom.js' %}" type="text/javascript"></script>
            <script href="{% static 'javascript/myjs.js' %}" type="text/javascript"></script>
    -->
    
    <script src="../static/js/p5.js" type="text/javascript"></script>
    
    <script src="../static/js/p5.dom.js" type="text/javascript"></script>
    
    <script src="../static/js/myjs.js" type="text/javascript"></script>
    
   <!-- <script src="../static/js/myjs2.js" type="text/javascript"></script>
    -->
</head>
<body>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
               <h8>ECOMP/ONAP VES JSON Validator tool</h8>
            </div>
            
        </div>
    </nav>

    

<style type="text/css">
    /*avoid page reflow by making the scrollbar always visible */
    html {
        overflow-y: scroll;
    }
</style>

<br />
    
<!--start of slecting for schemas-->
<div style="padding-left:15px;padding-right:15px;" id="validation">

    <div class="row">
        <div class="col-md-6">
            <div class="section-header">
                <label for="schemas">Select ONAP Schema:&nbsp;</label>
                <select id="schemas" data-bind="value: selectedSchemaName" class="form-control">
                    <optgroup label="Schemas">
                        <option value="">Empty schema</option>
                        <option value="../media/schemas/JsonSchema.json">JSON and Yaml Schema</option>
                    </optgroup>
                </select>
               <!-- <span data-bind="visible: schemaFailedMessage" class="validation-message validation-failed"><i class="fa fa-close"></i> <span data-bind="text: schemaFailedMessage"></span></span>-->
            </div>
        </div>
<!--End of Schema Selector-->
    </div>
<!--Schema Box--------------------------------------------------------------->
    <div class="row">
        <div class="col-md-6">
            <textarea id="schema" class="code" placeholder="Enter or paste your JSON Schema" cols="100" rows="15" data-bind="textInput: schemaText, codemirror:
             { 'lineNumbers': true, 'mode': 'javascript', 'lint': { 'getAnnotations': schemaLint, 'async': true, 'delay': 100 }, 'gutters': ['CodeMirror-lint-markers'], 'lineWrapping': true }"></textarea>
            
        </div>
<!--Schema Box--------------------------------------------------------------->


    <div class="container">
        <div class="row">   
            <div class="column"> 
            
            {%block content %}
            
            <h2>Upload Json syntax </h2>
            <form action="/jsonSyntaxValidation/" method="post" enctype="multipart/form-data">
                {% csrf_token %}
                <input type="file" name="documentjssyn" id="file-upload" required>
                <br>
                <input type="submit" value="Validate Syntax" required>
                <hr>
                
            </form>
                
         <!--   
         <p id="data">
             <button id="loadfile4jsonsyn">Load Message</button>
        </p>
            -->
        </div>
            
        <div class="column"> 
            
            <h2>Upload Json schema</h2>    
            <form action="/jsonSchemaValidation/" method="post" enctype="multipart/form-data">
                {% csrf_token %}
                <input type="file" name="documentjsschm" id="file-upload" required>
                <br>
                <input type="submit" value="Validate Schema" required>
                <hr>
  
            </form>
            
          <!--  
         <p id="data">
             <button id="loadfile4jsonschm">Load Message</button>
        </p>
-->
        </div>   

           
         <div class="column">
                    
        
            <h2>Upload Yaml syntax</h2>    
            <form action="/yamlSyntaxValidation/" method="post" enctype="multipart/form-data">
                {% csrf_token %}
                <input type="file" name="documentymlsyn" id="file-upload" required>
                <br>
                <input type="submit" value="Validate syntax" required>
                <hr>

            </form>
            
           <!-- 
         <p id="data2">
             <button id="loadfile4jsonschm">Load Message</button>
        </p>
             -->
             </div> 
      
             <div class="column">
                    
            <h2>Upload Yaml schema</h2>    
            <form action="/yamlSchemaValidation/" method="post" enctype="multipart/form-data">
                {% csrf_token %}
                <input type="file" name="documentymlschm" id="file-upload" required>
                <br>
                <input type="submit" value="Validate Schema" required>
                <hr>
              
            </form>
            
        {%endblock %}
            <!--
         <p id="data2">
             <button id="loadfile4jsonschm">Load Message</button>
        </p>
-->
        </div> 
   
    </div>
</div>

        
<div class="col-md-12">
                    <dl class="dl-horizontal">
                        <dt>Message:</dt>
                        <dd> <!--Validator error message or status--></dd>
                    </dl>
</div>
        
        
     <script type="text/javascript" src="{% static 'js/bundlecom.js' %}"></script>
    
     <script type="text/javascript" src="{% static 'js/bundlesun.js' %}"></script>
    
     <script type="text/javascript" src="{% static 'js/bundlevalid.js' %}"></script>
    
     <script type="text/javascript" src="{% static 'js/bundleint.js' %}"></script>
    
        
        

    <script type="text/html" id="errors-template">
        <div data-bind="foreach: $data" class="error-container">
            <dl class="dl-horizontal">
                <dt>Message:</dt>
                <dd data-bind="text: message" class="error-message"></dd>
                <!-- ko if: $data.schemaId !== null -->
                <dt>Schema path:</dt>
                <dd data-bind="text: $root.buildSchemaPath($data)"></dd>
                <!-- /ko -->
            </dl>
            <!-- ko if: childErrors.length > 0 -->
            <div style="padding-left: 50px;" data-bind="template: { name: 'errors-template', data: childErrors }"></div>
            <!-- /ko -->
        </div>
    </script>

    <script type="text/javascript" src="{% static 'js/ValidatorViewModel.js' %}"></script>
    <!-- <link rel='stylesheet' href='/static/css/main.css' />-->
    <script type="text/javascript">
        var vm = new Newtonsoft.ValidatorViewModel
        ("NeKuzqt2KDnzudxvPIb5P4N_Ga2XBjKpX5eexbQhXxDdvK3ql08zjJpbDTKmEkKKNEKOkp4PYnOKLCO0cVB4kEU-OvQ1:ZFBpN3ovOuGpaxpplhLlZ0hfFml-mTKuUV4G653Av2lfK6BRxsdp2T3xmWkGkLvKgpSoemc1jsNb1ZWkDp5mk7SaUDM1");
        vm.validationComplete = function () {
            // delay so that GA records the page view first
            setTimeout(function() {
                if (window.ga) {
                    window.ga('send', 'event', 'validation');
                }
            }, 1000);
        };
        vm.initialize();
        ko.applyBindings(vm);
    </script>

    <script type="text/javascript">
        var options = {
            lineNumbers: false
        };

        Sunlight.highlightAll(options);
    </script>

    <script type="text/javascript">
        function centerModal() {
            $(this).css('display', 'block');
            var $dialog = $(this).find(".modal-dialog");
            var offset = ($(window).height() - $dialog.height()) / 2.5;
            // Center modal vertically in window
            $dialog.css("margin-top", offset);
        }

        $('.modal').on('show.bs.modal', centerModal);
        $(window).on("resize", function () {
            $('.modal:visible').each(centerModal);
        });
    </script>


    <script>
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-98352-4', 'auto');
        ga('send', 'pageview');

    </script>
{{ txtout4jssyn }}
{{ txtout4jsschm }}
{{ txtout4ymlsyn }}
{{ txtout4ymlschm }}
</body>
</html>