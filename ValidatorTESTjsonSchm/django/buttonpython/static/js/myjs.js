//var txt;


function loadFile(){
    loadStrings("../media/txtout/ValidateJsonAgainstSchemaOutput.txt", fileLoaded);

}

function fileLoaded(data){
    //txt = data;
     createP(data);
}



function setup() {
 noCanvas(); 

var button = select("#loadfile4jsonschm");
button.mousePressed(loadFile);
    
}

