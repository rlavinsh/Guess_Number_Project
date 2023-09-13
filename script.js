"use strict";

// what is DOM
// stands for document object model[Structure Represepentation of Html Document]
// chnage text html attributes and even css styles
// and stored in a tree structure
// each element is object

/* 
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "Correct Number!🚗";

document.querySelector(".number").textContent = 23;
document.querySelector(".score").textContent = 15;

document.querySelector(".guess").value = 17;
*/

// Game Logic
let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highscore = 0;

// let highScore = 0;
// console.log(number);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // Here we handing the case if Input field is Null or Empty
  if (score < 1) {
    document.querySelector(".message").textContent = "Game over";
    document.body.style.backgroundColor = "red";
  } else {
    // Player guess no Number
    if (!guess) {
      document.querySelector(".message").textContent = "No Number !😒";
      score--;
      document.querySelector(".score").textContent = score;
    }
    // winning Logic
    else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "😎 Correct Number";
      document.body.style.backgroundColor = "green";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".highscore").textContent = score;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highScore").textContent = highscore;
      }
    } else if (guess - secretNumber < 2 && guess - secretNumber > -2) {
      document.querySelector(".message").textContent = "you are to close";
      document.body.style.backgroundColor = "orange";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess > secretNumber) {
      document.querySelector(".message").textContent =
        "you guess the number to high";
      document.body.style.backgroundColor = "red";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent =
        "you guess the number to low";
      document.body.style.backgroundColor = "red";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

// Game Reset Logic

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
