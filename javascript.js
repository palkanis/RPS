let random = Math.floor(Math.random()*100) + 1;

function getComputerChoice() {
    
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
console.log(getComputerChoice())