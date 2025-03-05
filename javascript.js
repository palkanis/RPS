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



let humanScore = 0;
let computerScore = 0;

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

const btn1 = document.querySelector('#rock');
const btn2 = document.querySelector('#paper');
const btn3 = document.querySelector('#scissors');

const results  = document.querySelector('#results');
const para1 = document.createElement('p');
const para2 = document.createElement('p');
const para3 = document.createElement('p');

results.appendChild(para1);
results.appendChild(para2);
results.appendChild(para3);


btn1.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    computerChoice = getComputerChoice();
    para1.textContent = playRound(playerChoice, computerChoice);
    para2.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
    if (humanScore === 5) {
        para3.textContent = 'You Win The Game!!';
        return humanScore = 0, computerScore = 0;
    }
    else if (computerScore === 5) {
        para3.textContent = 'You Lose The Game!!';
        return humanScore = 0, computerScore = 0;
    }
    para3.textContent = ''
}); 

btn2.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    computerChoice = getComputerChoice();
    para1.textContent = playRound(playerChoice, computerChoice);
    para2.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
    if (humanScore === 5) {
        para3.textContent = 'You Win The Game!!';
        return humanScore = 0, computerScore = 0;
    }
    else if (computerScore === 5) {
        para3.textContent = 'You Lose The Game!!';
        return humanScore = 0, computerScore = 0;
    }
    para3.textContent = ''
}); 

btn3.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    computerChoice = getComputerChoice();
    para1.textContent = playRound(playerChoice, computerChoice);
    para2.textContent = `Human: ${humanScore}   Computer: ${computerScore}`;
    if (humanScore === 5) {
        para3.textContent = 'You Win The Game!!';
        return humanScore = 0, computerScore = 0;
    }
    else if (computerScore === 5) {
        para3.textContent = 'You Lose The Game!!';
        return humanScore = 0, computerScore = 0;
    }
    para3.textContent = ''
}); 




