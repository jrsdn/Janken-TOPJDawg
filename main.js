const pickRock = 0;
const pickPaper = 1;
const pickScissors = 2;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(choice) {

    let cleanChoice = choice.toLowerCase();

    if (cleanChoice == 'rock') {
        return pickRock;
    } else if (cleanChoice == 'paper') {
        return pickPaper;
    } else if (cleanChoice == 'scissors') {
        return pickScissors;
    }
    return null;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (humanChoice !== computerChoice) {
        if (humanChoice == 0 && computerChoice == 1) {
            console.log('Computer throws paper! You lost!');
            computerScore++;
        } else if (humanChoice == 0 && computerChoice == 2) {
            console.log('Computer threw scissors! You win!');
            humanScore++;
        } else if (humanChoice == 1 && computerChoice == 0) {
            console.log('Computer threw rock! You win!');
            humanScore++;
        } else if (humanChoice == 1 && computerChoice == 2) {
            console.log('Computer threw scissors! You lost!');
            computerScore++;
        } else if (humanChoice == 2 && computerChoice == 0) {
            console.log('Computer threw rock! You lost!');
            computerScore++
        } else if (humanChoice == 2 && computerChoice == 1) {
            console.log('Computer threw paper! You win!');
            humanScore++; 
        }
    }
}

while (humanScore < 5 && computerScore < 5) {
    let humanInput = prompt('Rock, Paper, Scissors: ', '');

    let humanSelection = getHumanChoice(humanInput);
    let computerSelection = getComputerChoice();

    
    playRound(humanSelection, computerSelection);
    console.log('Player: ' + humanScore + ', Computer: ' + computerScore);
}
if (humanScore >= 5 && computerScore < 5) {
    console.log('Final result is player score ' + humanScore + ' and computer score ' + computerScore + '. You won!' );
} else {
    console.log('Final result is player score ' + humanScore + ' and computer score ' + computerScore + '. You lost!' );
}