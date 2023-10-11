var randomNumber1;
var randomNumber2;
function diceroll(){
      dice1roll();
      dice2roll();

 
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1 Won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Won🚩";
}
else{
    document.querySelector("h1").innerHTML = "Its a Tie👔";
}
}


function dice1roll(){
    randomNumber1 = Math.floor(Math.random()*6) + 1;
    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
}

function dice2roll(){
    randomNumber2 = Math.floor(Math.random()*6) + 1;
    var randomImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
}


document.querySelector("h1").addEventListener("click",(event) => {diceroll()});
document.querySelectorAll("img")[0].addEventListener("click",(event) => {dice1roll()});
document.querySelectorAll("img")[1].addEventListener("click",(event) => {dice2roll()});
