document.getElementById("rock").onclick = playRock;

document.getElementById("paper").onclick = playPaper;

document.getElementById("scissors").onclick = playScissors;

function playRock() {
  play("rock");
}

function playPaper() {
  play("paper");
}

function playScissors() {
  play("scissors");
}

let playerPoints = 0;
let computerPoints = 0;

let pPointDisplay = document.getElementById("playerScore");
let cPointDisplay = document.getElementById("computerScore");

pPointDisplay.textContent = playerPoints;
cPointDisplay.textContent = computerPoints;

function play(humanPlay) {
  computerPlay = getComputerPlay();

  document.getElementById("result").innerHTML = "";

  if (humanPlay == "rock") {
    document.getElementById("result1").innerHTML = "🪨";

    if (computerPlay == "rock") {
      document.getElementById("result2").innerHTML = "🪨";
      document.getElementById("result").innerHTML += "DRAW";
    } else if (computerPlay == "paper") {
      document.getElementById("result2").innerHTML = "📰";
      document.getElementById("result").innerHTML += "YOU LOSE";

      computerPoints += 1;
      cPointDisplay.textContent = computerPoints;
    } else if (computerPlay == "scissors") {
      document.getElementById("result2").innerHTML = "✂️";
      document.getElementById("result").innerHTML += "YOU WIN";
      playerPoints += 1;
      pPointDisplay.textContent = playerPoints;
      humanscore++;
    }
  } else if (humanPlay == "scissors") {
    document.getElementById("result1").innerHTML = "✂️";
    if (computerPlay == "scissors") {
      document.getElementById("result").innerHTML += "DRAW";
    } else if (computerPlay == "paper") {
      document.getElementById("result2").innerHTML = "📰";
      document.getElementById("result").innerHTML += "YOU LOSE";
      computerPoints += 1;
      cPointDisplay.textContent = computerPoints;
    } else if (computerPlay == "rock") {
      document.getElementById("result2").innerHTML = "🪨";
      document.getElementById("result").innerHTML += "YOU WIN";
      playerPoints += 1;
      pPointDisplay.textContent = playerPoints;
    }
  } else if (humanPlay == "paper") {
    document.getElementById("result1").innerHTML = "📰";

    if (computerPlay == "paper") {
      document.getElementById("result").innerHTML += "DRAW";
    } else if (computerPlay == "rock") {
      document.getElementById("result2").innerHTML = "🪨";
      document.getElementById("result").innerHTML += "YOU LOSE";
      computerPoints += 1;
      cPointDisplay.textContent = computerPoints;
    } else if (computerPlay == "scissors") {
      document.getElementById("result2").innerHTML = "✂️";
      document.getElementById("result").innerHTML += "YOU WIN";
      playerPoints += 1;
      pPointDisplay.textContent = playerPoints;
    }
  }

  function getComputerPlay() {
    var plays = ["rock", "paper", "scissors"];
    var play = plays[Math.floor(Math.random() * plays.length)];
    return play;
  }
}
