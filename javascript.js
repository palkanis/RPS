// Rock Papers Scissors

function getComputerChoice() {
    let random = Math.floor(Math.random()*100) + 1; //generate a random number between 0 and 100
    
    if (random >= 0 && random < 33) {
        return 'Rock';
    } 
    else if (random >= 33 && random < 66) {
        return 'Scissors';
    } 
    else if (random >= 66 && random <= 100 ); {
        return 'Paper';
    }
}

function getHumanChoice() {

    choice = prompt('Make Your Choice:');
    choice = choice.toLowerCase(); //makes choices case-insensitive

    if (choice === 'rock') {
        return 'rock'
    }
    else if (choice === 'paper') {
        return 'paper'
    }
    else if (choice === 'scissors') {
        return 'scissors'
    }
    else {
        return 'Not a valid choice!'
    }
}



function playGame() {

    let humanScore = 0

    let computerScore = 0

    function playRound(humanChoice, computerChoice) {

        if ((humanChoice === 'rock' && computerChoice === 'Rock') || (humanChoice === 'paper' && computerChoice === 'Paper') || (humanChoice === 'scissors' && computerChoice === 'Scissors')) {
            return "It's a tie! Play another round.";
        }
        else if (humanChoice === 'rock' && (computerChoice === 'Scissors' || computerChoice === 'Paper')) {
            if (computerChoice === 'Scissors') {
                humanScore += 1;
                return 'Human wins! Rock beats Scissors';
            }
            else {
                computerScore += 1;
                return 'Computer wins! Paper beats Rock';
            }
        }
        else if (humanChoice === 'paper' && (computerChoice === 'Scissors' || computerChoice === 'Rock')) {
            if (computerChoice === 'Scissors') {
                computerScore += 1;
                return 'Computer wins! Scissors beats Paper';
            }
            else {
                humanScore += 1;
                return 'Human wins! Paper beats Rock';
            }
        }
        else if (humanChoice === 'scissors' && (computerChoice === 'Paper' || computerChoice === 'Rock')) {
            if (computerChoice === 'Paper') {
                humanScore += 1;
                return 'Human wins! Scissors beats Paper';
            }
            else {
                computerScore += 1;
                return 'Computer wins! Rock beats Scissors';  
            }
        }
        else {
            return 'Not a valid choice!';
        }

    }

    i = 0
    while (i < 5) {
        i++;
        console.log(playRound(getHumanChoice(),getComputerChoice()))
        console.log('Human:', humanScore, 'Computer:', computerScore)
    }


    if (humanScore > computerScore) {
        return 'Human Wins'
    }
    else if (computerScore > humanScore) {
        return 'Computer wins'
    }
    else {
        return 'The game is tied'
    } 
}

console.log(playGame())
