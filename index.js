var randomNumber1 = Math.floor((Math.random()*6)+1);// 1-6

var randomNumber2 = Math.floor((Math.random()*6)+1); // 1-6

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png"); //dice1.png-dice6.png
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");//dice1.png-dice6.png

// If Player 1 wins
if(randomNumber1 > randomNumber2){

  document.querySelector("h1").textContent = "🚩Player 1 Wins" ;

}

//If Player 2 wins
else if (randomNumber2 > randomNumber1){

  document.querySelector("h1").textContent = "Player 2 Wins🚩" ;

}
else{

  document.querySelector("h1").textContent = "Draw!" ;

}
