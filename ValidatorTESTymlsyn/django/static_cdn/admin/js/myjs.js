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

var button = select("#documentymlsyn");
button.mousePressed(loadFile);
    
}

