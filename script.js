// Computers choice is working. Need to fix players choice and then use winner function to determine who wins by comapring the 2. Then test to see if it works and add it to ui.
// Next I need to add the rounds and winner aspects + comments on screen etc.

"use strict";

let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let rockBtn = document.getElementById("rock");

let options = ["Rock", "Paper", "scissors"];

// COMPUTERS CHOICE
function computerPlay() {
  let randomiser = Math.trunc(Math.random() * options.length);
  if (randomiser === 0) {
    console.log(`computer : ${options[0]} 🪨`);
  } else if (randomiser === 1) {
    console.log(`computer : ${options[1]} 📄`);
  } else {
    console.log(`computer : ${options[2]} ✂️`);
  }
  return computerPlay;
}

computerPlay();

printComputerPlay = computerPlay;

// PLAYERS CHOICE
function playersChoice() {

  rockBtn.addEventListener("click", function (rock) {
    console.log(`player : ${options[0]} 🪨`);
  });
  
  paperBtn.addEventListener("click", function () {
    console.log(`player : ${options[1]} 📄`);
  });
  
  scissorsBtn.addEventListener("click", function () {
    console.log(`player : ${options[2]} ✂️`);
  });

  return playersChoice;
}

playersChoice();

function playRound() {
  if (playersChoice == 'rock' && randomiser == 0) {
    console.log('draw')
  }
}





// function winner(playerChoice, computerPlay) {

// playerChoice = playerChoice();
// computerPlay = computerPlay();

// if (player rock, computer scissors) { player wins} etc.

// }

// 2.

// function game() {
// playRound();
// }

// function playerChoice() {
// //link buttons
// }

// const options = ['Rock', 'Paper', 'Scissors'];

// function computerPlay() {
//   return options[Math.floor(Math.random() * options.length)];
