var number = 0;
var update_rate = 50;
var lastTick = Date.now();

function count(){
    number++;    
}

function UpdateDisplay(){
    document.getElementById("numberText").innerHTML = "You have counted to " + number.toLocaleString();
}
function gameLoop(){
    diff = Date.now() - lastTick;
    lastTick = Date.now();
    UpdateDisplay();   
}

setInterval(gameLoop,update_rate);