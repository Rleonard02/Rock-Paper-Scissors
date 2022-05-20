
    

var compScore = 0;
var playerScore = 0;
let gameStatus;

function computerPlay(){
    let compRandomNumber =  (Math.floor(Math.random()*3) +1);
    if (compRandomNumber === 1){
        return "Rock"
    }else if (compRandomNumber === 2){
        return "Paper"
    }else{
        return "Scissors"
    }
}

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "Paper"){
            compScore++;
        }

        if(computerSelection == "Scissors"){
            playerScore++;
            
        }

        if(computerSelection == "Rock"){
           
        }
        
    }

    if(playerSelection == "scissors"){
        if(computerSelection == "Paper"){
            playerScore++;
            return "You Win! Scissors beats Paper"
        }

        if(computerSelection == "Scissors"){
            return "Tie! You both chose scissors"
        }

        if(computerSelection == "Rock"){
            compScore++;
            return "You lose! Rock beats scissors"
        }
        
    }

    if(playerSelection == "paper"){
        if(computerSelection == "Paper"){
            return "Tie! you both chose paper!"
        }

        if(computerSelection == "Scissors"){
            compScore++;
            return "You lose! Scissors beats paper"
        }

        if(computerSelection == "Rock"){
            playerScore++;
            return "You win! Paper beats rock."
        }
        
    }


    
    
}



function game() {
    

    for(let i = 0; i < 5 ; i++){
        const stringInput = prompt("Rock, Paper, or Scissors?");
        const playerSelection = stringInput.toLowerCase();
        console.log("Player choice: " + playerSelection);
        console.log("Comp choice: " + computerSelection);

        playRound(playerSelection, computerSelection)

        console.log("Player score: " + playerScore + " | " + "Comp score: " + compScore);
    }

    if(playerScore > compScore){
        return "You Win!"
    }

    if(compScore > playerScore){
        return "You Lose :("
    }

    if (compScore == playerScore){
        return "Tie"
    }
}

console.log(game());
    