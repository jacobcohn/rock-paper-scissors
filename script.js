// function to get computer's selection
function computerPlay() {
    // randomly select 0, 1, or 2
    const randomNumber = Math.floor(Math.random() * 3);
    // convert number into selection
    switch (randomNumber) {
        case 0:
            return('Rock');
        case 1:
            return('Paper');
        case 2:
            return('Scissors');
    }
}

// function to get player's selection
function playerPlay() {
    // ask for player's selection
    const playerPrompt = prompt('Rock, Paper, or Scissors?');
    // convert selection into correct format
    firstLetter = playerPrompt.substr(0, 1).toUpperCase();
    restOfWord = playerPrompt.substr(1).toLowerCase();
    return(firstLetter + restOfWord);
}

// main function
function playRound(playerSelection, computerSelection) {
    // get computer's selection
    const computerSelection = computerPlay();
    // get player's selection
    const playerSelection = playerSelection();
}

console.log(playerPlay())