
//var txt;


function loadFile(){
    loadStrings("jsontext.txt", fileLoaded);
}

function fileLoaded(data){
    //txt = data;
     createP(data);
}



function setup() {
 noCanvas(); 
    
var button = select("#loadfile");
button.mousePressed(loadFile);
    
}