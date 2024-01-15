
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);

    if(choice == 0) return 'paper';

    if(choice == 1) return 'rock';

    if(choice == 2) return 'scissors';

}


function playRound(playerSelection, computerSelection){


    if(!isPlayerSelectionValid(playerSelection)){
        alert("Please enter 'rock', 'paper' or 'scissors'");
        return;
    }


    if((playerSelection == 'paper' && computerSelection == 'rock') || 
        playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'YOU WIN!!';

    }else if(playerSelection == computerSelection){
        return 'DRAW';

    }else {
        return 'YOU LOOSE';
    }
}

function isPlayerSelectionValid(playerSelection){
    return (playerSelection == 'paper' || playerSelection == 'scissors' || playerSelection == 'paper');
}

// let playerSelection = prompt("Enter player choice");
let playerSelection = 'paper';
let computerSelection = getComputerChoice();


console.log(playerSelection, computerSelection, playRound(playerSelection, computerSelection));