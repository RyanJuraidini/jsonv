//var txt;


function loadFile(){
    loadStrings("../media/txtout/TestJsonSyntaxOutput.txt", fileLoaded);

}

function fileLoaded(data){
    //txt = data;
     createP(data);
}



function setup() {
 noCanvas(); 

var button = select("#loadfile4jsonsyn");
button.mousePressed(loadFile);
    
}

