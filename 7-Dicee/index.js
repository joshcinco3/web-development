var randomNumber1 = randomDiceNumber();
var randomNumber2 = randomDiceNumber();

document.querySelectorAll("img")[0].setAttribute("src", randomDiceGenerator(randomNumber1));

document.querySelectorAll("img")[1].setAttribute("src", randomDiceGenerator(randomNumber2));

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

function randomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function randomDiceGenerator(randomNumber) {
    return "images/dice" + randomNumber + ".png";
}