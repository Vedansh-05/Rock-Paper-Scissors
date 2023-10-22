function capitalise(str){
    let word=str.toLowerCase();
    return str.charAt(0).toUpperCase()+str.slice(1);
}

function getComputerChoice(){
    let choiceNo= Math.floor(Math.random()*3+1);
    if (choiceNo===0){
        return "rock";
    }
    else if(choiceNo===1){
        return "paper";
    }
    else if(choiceNo===2){
        return "scissors";
    }
}

function playRound(playerSelection,computerSelection){
    if (playerSelection==="rock"){
        if (computerSelection==="scissors"){
            return "player";
        }
        else if(computerSelection==="paper"){
            return "computer";
        }
        else{
            return "tie";
        }
    }
    else if (playerSelection==="paper"){
        if (computerSelection==="rock"){
            return "player";
        }
        else if(computerSelection==="scissors"){
            return "computer";
        }
        else{
            return "tie";
        }
    }
    else if (playerSelection==="scissors"){
        if (computerSelection==="paper"){
            return "player";
        }
        else if(computerSelection==="rock"){
            return "computer";
        }
        else{
            return "tie";
        }
    }   
}

function game(){
    let userScore=0;
    let computerScore=0;
    console.log("User's Score:0");
    console.log("COmputer's Score:0");
    while (userScore<5 && computerScore<5){
        let userCh= prompt("Enter Rock,Paper or Scissors:");
        let userChoice=userCh.toLowerCase();
        let computerChoice=getComputerChoice();
        if (playRound(userChoice,computerChoice)==="player"){
            userScore++;
            let msg="You win!"+capitalise(userChoice)+ " beats "+ capitalise(computerChoice);
            console.log(msg);
        }
        else if(playRound(userChoice,computerChoice)==="computer"){
            computerScore++;
            let msg="You lose! "+capitalise(computerChoice)+ " beats "+ capitalise(userChoice);
            console.log(msg);
        }
        else if(playRound(userChoice,computerChoice)==="tie"){
            console.log("It's a tie!!");
        }
        let userScoreMessage="User's Score:"+userScore;
        let computerScoreMessage="Computer's Score:"+computerScore;
        console.log(userScoreMessage);
        console.log(computerScoreMessage);
    }
    if (userScore===5){
        console.log("You win!!");
    }
    else{
        console.log("You lose!!");
    }
}

game();