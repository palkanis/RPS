//let random = Math.floor(Math.random()*100) + 1;

function getComputerChoice() {
    let random = Math.floor(Math.random()*100) + 1;
    
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

    if (choice === 'Rock' || choice === 'rock') {
        return 'You chose: Rock'
    }
    else if (choice === 'Paper' || choice === 'paper') {
        return 'You chose: Paper'
    }
    else if (choice === 'Scissors' || choice === 'scissors') {
        return 'You chose: Scissors'
    }
    else {
        return 'Not a valid choice!'
    }
}

console.log(getComputerChoice())