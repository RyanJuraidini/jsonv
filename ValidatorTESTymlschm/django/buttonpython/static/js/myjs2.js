//var txt;


function loadFile(){
    //loadStrings2("../media/txtout/TestYamlSyntaxOutput.txt", fileLoaded2);
    loadStrings("../media/txtout/ValidateJsonAgainstSchemaOutput.txt", fileLoaded);
}

function fileLoaded(data2){
    //txt = data;
     createP(data2);
}



function setup() {
 noCanvas(); 

var button2 = select("#loadfile4jsonschm");
button2.mousePressed(loadFile);
    
}
