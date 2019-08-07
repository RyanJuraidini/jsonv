<?php
if (isset($_POST['submit'])) {
    $file = $_FILES['file'];

    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $fileError = $_FILES['file']['error'];
    $fileType = $_FILES['file']['type'];
     
    $fileExt = explode('.', $fileName);
    $fileActualExt = strtolower(end($fileExt));

    $allowed = array('json', 'yml');
    
    
    if(!empty($fileName)){
        if(in_array($fileActualExt, $allowed)) {
            if($fileError==0) {
                $fileNameNew = uniqid('', true).".".$fileActualExt;
                $fileDestination = '/var/www/html/ValidatorTEST/uploads/'.$fileNameNew;
                move_uploaded_file($fileTmpName, $fileDestination);
                header("Location: index.php?uploadsuccess");
            }else {
                echo'<script type="text/javascript">alert("There was an error upoading your file!")</script>';
            }
        }
        else{
            echo'<script type="text/javascript">alert("You cannot upload files of this type!")</script>';
        }
    }
    else{
        echo'<script type="text/javascript">alert("Please select a file!")</script>';
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="shortcut icon" href="/favicon.ico">

    <title>JSON Schema Validator - Newtonsoft</title>
    
    <link href="content/styles/validbundle.css" rel="stylesheet"/>
            <script src="p5.js" type="text/javascript"></script>
            <script src="p5.dom.js" type="text/javascript"></script>
            <script src="myjs.js" type="text/javascript"></script>
    
</head>
<body>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="/"><i class="fa fa-shield"></i> JSON Schema Validator</a>
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
<div class="container">
    <div class="row">
        <div class="col-md-12">
            
            <p>
                ONAP Schemas
            </p>
        </div>
    </div>
</div>
<br />
    
<!--start of slecting for schemas-->
<div style="padding-left:15px;padding-right:15px;" id="validation">

    <div class="row">
        <div class="col-md-6">
            <div class="section-header">
                <label for="schemas">Select schema:&nbsp;</label>
                <select id="schemas" data-bind="value: selectedSchemaName" class="form-control">
                    <optgroup label="Schemas">
                        <option value="">Empty schema</option>
                        <option value="schemas/JsonSchema.json">JSON and Yaml Schema</option>
                    </optgroup>
                </select>
               <!-- <span data-bind="visible: schemaFailedMessage" class="validation-message validation-failed"><i class="fa fa-close"></i> <span data-bind="text: schemaFailedMessage"></span></span>-->
            </div>
        </div>
<!--End of Schema Selector-->
        
        <div class="col-md-6">
            <div class="section-header">
                <label for="json">Input JSON:</label>
               <!--Validator error message or status-->
            </div>
        </div>
    </div>
<!--Schema Box--------------------------------------------------------------->
    <div class="row">
        <div class="col-md-6">
            <textarea id="schema" class="code" placeholder="Enter or paste your JSON Schema" cols="100" rows="15" data-bind="textInput: schemaText, codemirror:
             { 'lineNumbers': true, 'mode': 'javascript', 'lint': { 'getAnnotations': schemaLint, 'async': true, 'delay': 100 }, 'gutters': ['CodeMirror-lint-markers'], 'lineWrapping': true }"></textarea>
            
        </div>
<!--Schema Box--------------------------------------------------------------->
<!--User file box--------------------------------------------------------------->     
            <div class="col-md-6">
            <textarea id="json" class="code" placeholder="Enter or paste the JSON you want to validate against the schema" cols="100" rows="15" data-bind="textInput: jsonText, codemirror:
             { 'lineNumbers': true, 'mode': 'javascript', 'lint': { 'getAnnotations': jsonLint, 'async': true, 'delay': 100 }, 'gutters': ['CodeMirror-lint-markers'], 'lineWrapping': true }"></textarea>
        </div>
    </div>
<!--User file box--------------------------------------------------------------->

    <div class="container">
        <div class="row">   
            <div class="col-md-12">
                    <dl class="dl-horizontal">
                        <dt>Message:</dt>
                        <dd> <!--Validator error message or status--></dd>
                    </dl>
            </div>
                <form action="index.php" method="POST" enctype="multipart/form-data">
                    <input type="file" name="file"><br>
                    <button type="submit" name="submit">UPLOAD</button>
                </form>  
            
            <p>
            <button id="loadfile">Load the Text</button>
        </p>
        </div>
        
        <button onclick="location.href='{% url '//var//www//html//ValidatorTEST//django//buttonpython//script' %}'">Execute Script</button>
    <hr> {% if data %} {{data | safe}} {% endif %}

    <form action="" method="post">
        {% csrf_token %} Input Text:
        <input type="text" name="param" required><br><br> {{data_external}}
        <br><br> {{data1}}
        <br><br>
        <input type="submit" value="Execute External Python Script">

    </form>
    </div>
</div>

    <script src="content/scripts/bundlecom.js"></script>

    
    <script src="content/scripts/bundlesun.js"></script>

    <script src="content/scripts/bundlevalid.js"></script>

    <script src="content/scripts/bundleint.js"></script>


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

    <script type="text/javascript" src="Content2/ValidatorViewModel.js"></script>
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

</body>
</html>