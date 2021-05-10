var number = 0;
var update_rate = 50;
var lastTick = Date.now();

alert("DISCLAIMER: This is the first prototy of this, there is literally nothing except a button and a number lol");

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
