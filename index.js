var randomNumber1 = Math.floor(Math.random()*6) +1 ;

var randomDiceImage="dice"+randomNumber1+".png";

var randomImageSource= "Images/"+randomDiceImage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random()*6) +1 ;

var randomImageSource2= "Images/dice"+randomNumber2+ ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if (randomNumber1>randomNumber2){
  document.querySelector("h3").innerHTML = "Player 1 Wins!👑";
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h3").innerHTML = "Player 2 Wins!👑";
}
else {
  document.querySelector("h3").innerHTML = "Its a tie, Rematch!";
}
