// For Dice 1


var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

let img1 = document.querySelectorAll('img')[0];
img1.setAttribute('src', randomImageSource);


// For Dice 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.getElementsByTagName('h1')[0].innerHTML = "🚩 Player 1 wins!"
} else if (randomNumber2 > randomNumber1) {
    document.getElementsByTagName('h1')[0].innerHTML = "Player 2 Wins! 🚩"
} else {
    document.getElementsByTagName('h1')[0].innerHTML = "Draw"
}