// Computers choice is working. Need to fix players choice and then use winner function to determine who wins by comapring the 2. Then test to see if it works and add it to ui.
// Next I need to add the rounds and winner aspects + comments on screen etc.


let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');


let options = ['Rock', 'Paper', 'scissors'];


// COMPUTERS CHOICE
function computerPlay() {

let randomiser = Math.trunc(Math.random() * options.length);
if(randomiser === 0) {
  console.log(`computer : ${options[0]} 🪨`);
}else if (randomiser === 1) {
  console.log(`computer : ${options[1]} 📄`);
} else {
  console.log(`computer : ${options[2]} ✂️`);
  
  return computerPlay
}};

computerPlay();
 
// PLAYERS CHOICE
function playerChoice() {
  let rockBtn = document.querySelector('.rock');
rockBtn.addEventListener("click", function(){ alert("Hello World!"); });

return playerChoice;
};




function winner(playerChoice, computerPlay) {

playerChoice = playerChoice();
computerPlay = computerPlay();

//if (player rock, computer scissors) { player wins} etc.


}


// 2. 


// function game() {
// playRound();
// }

// function playRound() {
// const playerSelection = playerChoice;
// const computerSelection = computerPlay;
// }

// function playerChoice() {
// //link buttons
// }

// const options = ['Rock', 'Paper', 'Scissors'];

// function computerPlay() {
//   return options[Math.floor(Math.random() * options.length)];
// };

