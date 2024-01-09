let getComputerChoice = function (){
    // use the Math.random() method
    // use Math.

    let choice = ['rock', 'paper', 'scissors']
    let odds = Math.floor(Math.random() * 3)
    // console.log(choice[odds], Math.random())
    return choice[odds]
}

let playRound = function(playerSelection, computerSelection){
    // console.log(playerSelection, computerSelection)
    // playerSelection.toLowerCase()
    computerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        return playRound()
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper') ) { 
        return `You Win! ${playerSelection.toUpperCase()[0] + playerSelection.slice(1)} beats ${computerSelection.toUpperCase()[0] + computerSelection.slice(1)}`
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
               (playerSelection === 'paper' && computerSelection === 'scissors') ||
               (playerSelection === 'scissors' && computerSelection === 'rock') ) { 
        return `You Lose! ${computerSelection.toUpperCase()[0] + computerSelection.slice(1)} beats ${playerSelection.toUpperCase()[0] + playerSelection.slice(1)}`
    }
}

// let playerSelection = prompt('Enter Rock, Paper, or Scissor?', 'rock');
const computerSelection = getComputerChoice()

function game() {
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt(`Rock, Paper, or Scissors?`).toLowerCase()
        console.log(playRound(playerSelection, computerSelection))

    }
}

game()

