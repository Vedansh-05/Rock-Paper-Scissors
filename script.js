function getComputerChoice(){
    let choiceNo= Math.floor(Math.random()*3+1);
    if (num===0){
        return "Rock";
    }
    else if(num===1){
        return "Paper";
    }
    else if(num===2){
        return "Scissors";
    }
}

function playRound(playerSelection,computerSelection){
    if (playerSelection.toLowerCase()==="rock"){
        if (computerSelection.toLowerCase()==="scissors"){
            return "You win! Rock beats Scissors";
        }
        else if(computerSelection.toLowerCase()==="paper"){
            return "You lose! Paper beats Rock";
        }
        else{
            return "It's a tie!";
        }
    }
    else if (playerSelection.toLowerCase()==="paper"){
        if (computerSelection.toLowerCase()==="rock"){
            return "You win! Paper beats Rock";
        }
        else if(computerSelection.toLowerCase()==="scissors"){
            return "You lose! Scissors beats Papers";
        }
        else{
            return "It's a tie!";
        }
    }
    else if (playerSelection.toLowerCase()==="scissors"){
        if (computerSelection.toLowerCase()==="paper"){
            return "You win! Scissors beats Paper";
        }
        else if(computerSelection.toLowerCase()==="rock"){
            return "You lose! Rock beats Scissors";
        }
        else{
            return "It's a tie!";
        }
    }   
}

