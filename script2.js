

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


function play(humanPlay) {

    computerPlay = getComputerPlay();

    document.getElementById('result').innerHTML = 'You played' + humanPlay + '. The bot played' + computerPlay;

    if(humanPlay =='rock') {
        if(computerPlay == 'rock'){

            document.getElementById('result').innerHTML += 'You tied' ;
        }else if  (computerPlay == 'paper') {
            document.getElementById('result').innerHTML += 'You lose' ; 
        }else if (computerPlay == 'scissors') {
            document.getElementById('result').innerHTML += 'You win' ;
            humanscore++;
        } 
        }else if(humanPlay =='scissors') {
            if(computerPlay == 'scissors'){
    
                document.getElementById('result').innerHTML += 'You tied' ;
            }else if  (computerPlay == 'paper') {
                document.getElementById('result').innerHTML += 'You lose' ; 
            }else if (computerPlay == 'rock') {
                document.getElementById('result').innerHTML += 'You win' ;
            } 
        } else if(humanPlay == 'paper') {
            if(computerPlay == 'paper'){
    
                document.getElementById('result').innerHTML += 'You tied' ;
            }else if  (computerPlay == 'rock') {
                document.getElementById('result').innerHTML += 'You lose' ; 
            }else if (computerPlay == 'scissors') {
                document.getElementById('result').innerHTML += 'You win' ;
            } 
        }













function getComputerPlay() {
    var plays = ['rock', 'paper', 'scissors'];
    var play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}}