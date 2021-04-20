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

// make variables for scores
let computerScore = 0;
let playerScore = 0;

// make variables for buttons
const rockBtn = document.querySelector('#rock-button');
const paperBtn = document.querySelector('#paper-button');
const scissorsBtn = document.querySelector('#scissors-button');

// playRound when player clicks a button
rockBtn.addEventListener('click', () => {
    playRound('Rock');
});
paperBtn.addEventListener('click', () => {
    playRound('Paper');
});
scissorsBtn.addEventListener('click', () => {
    playRound('Scissors');
});

// main function
function playRound(playerSelection) {
    // get computer's selection
    const computerSelection = computerPlay();
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

/*
// function for playing up to 5
function game() {
    // make a while loop as long as both scores are under 5
    while (playerScore < 5 && computerScore < 5) {
        playRound(playerSelection);
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
*/