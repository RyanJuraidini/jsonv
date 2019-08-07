//var txt;


function loadFile(){
    loadStrings("../media/txtout/TestYamlSyntaxOutput.txt", fileLoaded);

}

function fileLoaded(data){
    //txt = data;
     createP(data);
}



function setup() {
 noCanvas(); 

var button = select("#loadfile4ymlsyn");
button.mousePressed(loadFile);
    
}

