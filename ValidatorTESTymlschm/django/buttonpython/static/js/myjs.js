//var txt;


function loadFile(){
   loadStrings("../media/txtout/ValidateYamlAgainstSchemaOutput.txt", fileLoaded);

}

function fileLoaded(data){
    //txt = data;
     createP(data);
}



function setup() {
 noCanvas(); 

var button = select("#loadfile4ymlschm");
button.mousePressed(loadFile);
    
}

