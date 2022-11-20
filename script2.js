

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

    document.getElementById('result').innerHTML = '';

    if(humanPlay =='rock') {

        document.getElementById('result1').innerHTML = '🪨';

        if(computerPlay == 'rock'){
            document.getElementById('result2').innerHTML = '🪨';
            document.getElementById('result').innerHTML += 'DRAW' ;

            document.getElementById('playerScore').innerHTML += 1 ;
            document.getElementById('computerScore').innerHTML += 1 ;


        }else if  (computerPlay == 'paper') {
            document.getElementById('result2').innerHTML = '📰';
            document.getElementById('result').innerHTML += 'YOU LOSE' ; 
        }else if (computerPlay == 'scissors') {
            document.getElementById('result2').innerHTML = '✂️';
            document.getElementById('result').innerHTML += 'YOU WIN' ;
            humanscore++;
        } 
        }else if(humanPlay =='scissors') {

            document.getElementById('result1').innerHTML = '✂️';
            if(computerPlay == 'scissors'){
    
                document.getElementById('result').innerHTML += 'DRAW' ;
            }else if  (computerPlay == 'paper') {
                document.getElementById('result2').innerHTML = '📰';
                document.getElementById('result').innerHTML += 'YOU LOSE' ; 
            }else if (computerPlay == 'rock') {
                document.getElementById('result2').innerHTML = '🪨';
                document.getElementById('result').innerHTML += 'YOU WIN' ;
            } 
        } else if(humanPlay == 'paper') {
            document.getElementById('result1').innerHTML = '📰';

            if(computerPlay == 'paper'){
                document.getElementById('result').innerHTML += 'DRAW' ;
            }else if  (computerPlay == 'rock') {
                document.getElementById('result2').innerHTML = '🪨';
                document.getElementById('result').innerHTML += 'YOU LOSE' ; 
            }else if (computerPlay == 'scissors') {
                document.getElementById('result2').innerHTML = '✂️';
                document.getElementById('result').innerHTML += 'YOU WIN' ;
            } 
        }













function getComputerPlay() {
    var plays = ['rock', 'paper', 'scissors'];
    var play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}}