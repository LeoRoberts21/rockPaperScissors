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
  return computerPlay
};

// PLAYERS CHOICE
function playerChoice() {
   let rockClick = rockBtn.addEventListener("click", function () {
    console.log(`player : ${options[0]} 🪨`);
  });

  let paperClick = paperBtn.addEventListener("click", function () {
    console.log(`player : ${options[1]} 📄`);
  });

  let scissorClick = scissorsBtn.addEventListener("click", function () {
    console.log(`player : ${options[2]} ✂️`);
  });

  return playerChoice;
};





  function playRound() {
    if(rockClick === true + randomiser === 0) {
      console.log(`draw!`)
    } else if (scissorClick === true + randomiser === 1){
      console.log(`draw!`)
    } else if (paperClick === true + randomiser === 2){
      console.log(`draw!`)
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
