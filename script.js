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
    const playerPrompt = prompt('Rock, Paper, or Scissors?' + '\n' + 'First to 5 Wins!');
    // make sure it is not ''
    if (playerPrompt === '') {
        // give player an alert
        alert('Please enter Rock, Paper, or Scissors')
        // send back to original function
        return(playerPlay());
    }
    // convert selection into correct format
    firstLetter = playerPrompt.substr(0, 1).toUpperCase();
    restOfWord = playerPrompt.substr(1).toLowerCase();
    return(firstLetter + restOfWord);
}

// function to make sure it is acceptable
function playerPlayAcceptable() {
    // get player's selction
    const playerSelectionBefore = playerPlay();
    // make sure it is Rock, Paper, or Scissors
    if (
        playerSelectionBefore === 'Rock' 
        || playerSelectionBefore === 'Paper' ||
         playerSelectionBefore === 'Scissors' 
    ) {
        return(playerSelectionBefore);
    } else {
        // give player an alert
        alert('Please enter Rock, Paper, or Scissors')
        // send back to original function
        return(playerPlay());
    }
}

// make variables for scores
let computerScore = 0;
let playerScore = 0;

// main function
function playRound() {
    // get computer's selection
    const computerSelection = computerPlay();
    // get player's selection after making sure it is acceptable
    const playerSelection = playerPlayAcceptable();
    // figure out who is winner
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors")
        || (playerSelection === "Paper" && computerSelection === "Rock")
        || (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        // player wins
        // add 1 point to player's score
        playerScore += 1;
        // alert for score and this round
        alert("You: " + playerScore + "\n" + "Computer: " + computerScore + '\n'
         + 'You Win! ' + playerSelection + ' beats ' + computerSelection);
        return;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Paper")
        || (playerSelection === "Paper" && computerSelection === "Scissors")
        || (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
        // computer wins
        // add 1 point to player's score
        computerScore += 1;
        // alert for score and this round
        alert("You: " + playerScore + "\n" + "Computer: " + computerScore + '\n'
         + 'You Lose! ' + computerSelection + ' beats ' + playerSelection);
        return;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Rock")
        || (playerSelection === "Paper" && computerSelection === "Paper")
        || (playerSelection === "Scissors" && computerSelection === "Scissors")
    ) {
        // tie
        // alert for score and this round
        alert("You: " + playerScore + "\n" + "Computer: " + computerScore + '\n'
         + 'Tie! ' + playerSelection + ' ties ' + computerSelection);
        return;
    }
}

// function for playing up to 5
function game() {
    // make a while loop as long as both scores are under 5
    while (playerScore < 5 && computerScore < 5) {
        playRound();
    }
    // make an alert for the end of the game
    if (playerScore > computerScore) {
        alert(
            'Congrations! You Won!' + "\n" + "You beat the Computer 5 to "
             + computerScore + '!' + '\n' + 'Reload to Play Again!'
        );
        return;
    } else {
        alert(
            'You Lost! Better Luck Next Time!' + "\n" + "The Computer beat You 5 to "
             + playerScore + '!' + '\n' + 'Reload to Play Again!'
        );
        return;
    }
}

// start the game
console.log(game())