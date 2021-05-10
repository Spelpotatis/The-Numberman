var number = 0;
var number_per_second = 0;
var autocounters = 0;
var autocounter_cost = 10;
var update_rate = 50;
var lastTick = Date.now();

function count(){
    number++;    
}

function buyAutocounter(){
    if(number >= autocounter_cost){
        number -= autocounter_cost;
        autocounters++;
    }   
}

function ProductionLoop(diff){
    number_per_second = autocounters;
    autocounter_cost =  Math.pow(1.1, autocounters) * 10;
    number += (number_per_second * diff)
}
function UpdateDisplay(){
    document.getElementById("numberText").innerHTML = "You have counted to " + Math.floor(number).toLocaleString();
    document.getElementById("numberPerSecondText").innerHTML = "You are counting up " + number_per_second.toLocaleString() + " per second.";
    document.getElementById("buyAutocounterButton").innerHTML = "Buy Autocounter. Amount: " + autocounters.toLocaleString() + " Cost: " + Math.floor(autocounter_cost).toLocaleString();
}
function gameLoop(){
    diff = (Date.now() - lastTick)/1000;
    lastTick = Date.now();
    UpdateDisplay();
    ProductionLoop(diff);
}

setInterval(gameLoop,update_rate);
