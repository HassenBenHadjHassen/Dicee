//Warning
if(window.innerWidth < 1028) {
    alert("This Website is Not Responsive For Mobile Users! please use a Computer Instead.")
}

//Player One Settings

var randNum1 = Math.random();
randNum1 *= 6;
randNum1 = Math.floor(randNum1)+1;

var dice1 = document.querySelector(".dice1");

if (randNum1 === 1) {
    dice1.setAttribute("src", "data/images/dice1.png");
} else if (randNum1 === 2)  {
    dice1.setAttribute("src", "data/images/dice2.png");
} else if (randNum1 === 3)  {
    dice1.setAttribute("src", "data/images/dice3.png");
} else if (randNum1 === 4)  {
    dice1.setAttribute("src", "data/images/dice4.png");
} else if (randNum1 === 5)  {
    dice1.setAttribute("src", "data/images/dice5.png");
} else if (randNum1 === 6) {
    dice1.setAttribute("src", "data/images/dice6.png");
}

// Player 2 Settings

var randNum2 = Math.random();
randNum2 *= 6;
randNum2 = Math.floor(randNum2)+1;

var dice2 = document.querySelector(".dice2");

if (randNum2 === 1) {
    dice2.setAttribute("src", "data/images/dice2.png");
} else if (randNum2 === 2)  {
    dice2.setAttribute("src", "data/images/dice2.png");
} else if (randNum2 === 3)  {
    dice2.setAttribute("src", "data/images/dice3.png");
} else if (randNum2 === 4)  {
    dice2.setAttribute("src", "data/images/dice4.png");
} else if (randNum2 === 5)  {
    dice2.setAttribute("src", "data/images/dice5.png");
} else if (randNum2 === 6) {
    dice2.setAttribute("src", "data/images/dice6.png");
}

//Server Settings

if (randNum1 > randNum2) {
    document.querySelector(".winnerText").innerHTML = '\n        <h1 class="winner">🚩Player 1 Wins!</h1>';
} else if (randNum1 < randNum2) {
    document.querySelector(".winnerText").innerHTML = '\n        <h1 class="winner">Player 2 Wins!🚩</h1>' ;
} else {
    document.querySelector(".winnerText").innerHTML = '\n        <h1 class="winner">🚩Draw!🚩</h1>' ;
}