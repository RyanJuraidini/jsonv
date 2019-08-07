
//var txt;


function loadFile(){
    loadStrings("../media/txt/jsontext.txt", fileLoaded);
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