
    

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
console.log(computerSelection);

function playRound(){
    const string = prompt("Rock, Paper, or Scissors?");
    //console.log(string);
    const array = string.split(" ")
    for (let i =0; i<array.length; i++){
        array[i]=array[i].charAt(0).toUpperCase() + array[i].toLowerCase(1).slice(1);
    }
    let playerSelection = array.join(" ");
    
    if (playerSelection === "Rock"){
        if (computerSelection === "Paper"){
            gameStatus = 2;
            return "You Lose! Paper beats Rock"
            
        }
        else if (computerSelection === "Scissors"){
            gameStatus = 1;
            return "You Win! Rock beats Scissors";
        }
        else if (computerSelection ==="Rock"){
            gameStatus = 3;
            return "It's a Tie!";
        }
    }
    if (playerSelection === "Paper"){
        if (computerSelection === "Scissors"){
            gameStatus = 2;
            return "You Lose! Scissors beats Paper"
        }
        else if (computerSelection === "Rock"){
            gameStatus = 1;
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection ==="Paper"){
            gameStatus = 3;
            return "It's a Tie!";
        }
    }
    if (playerSelection === "Scissors"){
        if (computerSelection === "Paper"){
            gameStatus = 1;
            return "You Win! Scissors beats Paper";
        }
        else if (computerSelection === "Rock"){
            gameStatus = 2;
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection ==="Scissors"){
            gameStatus = 3;
            return "It's a Tie!";
        }
    }
}

function game(){
        // Round 1
        window.alert(playRound());
        if (gameStatus === 1){
            playerScore++
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
            
        }else if (gameStatus === 2) {
            compScore++
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
            
        }else if (gameStatus === 3){
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
            
        }
        
        //Round 2
        window.alert(playRound());
        if (gameStatus === 1){
            playerScore++
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
            
        }else if (gameStatus === 2) {
            compScore++
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
        }else if (gameStatus === 3){
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
        }
        //Round 3
        window.alert(playRound());
        if (gameStatus === 1){
            playerScore++
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
               
        }else if (gameStatus === 2) {
            compScore++
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
               
        }else if (gameStatus === 3){
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
        }
        //Round 4
        window.alert(playRound());
        if (gameStatus === 1){
            playerScore++
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
            
        }else if (gameStatus === 2) {
            compScore++
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
        
        }else if (gameStatus === 3){
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
        }
        //Round 5
        window.alert(playRound());
        if (gameStatus === 1){
            playerScore++
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
            if (playerScore > compScore){
                alert ("You Win! Congrats!");
            }else if (compScore > playerScore){
                alert ("You lose! Too bad");
            }else if (playerScore === compScore) {
                    alert("It's a tie! How boring");
            }
            
        }else if (gameStatus === 2) {
            compScore++
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
            if (playerScore > compScore){
                alert ("You Win! Congrats!");
            }else if (compScore > playerScore){
                alert ("You lose! Too bad");
            }else if (playerScore === compScore) {
                    alert("It's a tie! How boring");
            }
            
        }else if (gameStatus === 3){
            console.log("Your Score: " + playerScore, "CPU Score: " + compScore);
            if (playerScore > compScore){
                alert ("You Win! Congrats!");
            }else if (compScore > playerScore){
                alert ("You lose! Too bad");
            }else if (playerScore === compScore) {
                    alert("It's a tie! How boring");
            }
            
        }
    

}

game();

