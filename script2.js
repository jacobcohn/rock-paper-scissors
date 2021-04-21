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
const btns = document.querySelectorAll('button');
const rockBtn = document.querySelector('#rock-button');
const paperBtn = document.querySelector('#paper-button');
const scissorsBtn = document.querySelector('#scissors-button');
const restartBtn = document.querySelector('#restart-button');

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

// make variable for #score-div and add css
const scoreDiv = document.querySelector('#score-div');
scoreDiv.style.cssText = 'width: 100vw; height: 25vh;'
scoreDiv.innerHTML = "You: " + playerScore + '<br />' + "Computer: " + computerScore;

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
        // displays score and this round and checks for 5 wins
        scoreDiv.innerHTML = "You: " + playerScore + '<br />' + "Computer: " + computerScore + '<br />'
        + 'You Win! ' + playerSelection + ' beats ' + computerSelection;
        gameOver();
        return;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Paper")
        || (playerSelection === "Paper" && computerSelection === "Scissors")
        || (playerSelection === "Scissors" && computerSelection === "Rock")
    ) {
        // computer wins
        // add 1 point to player's score
        computerScore += 1;
        // displays score and this round and checks for 5 wins
        scoreDiv.innerHTML = "You: " + playerScore + '<br />' + "Computer: " + computerScore + '<br />'
         + 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
         gameOver();
        return;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Rock")
        || (playerSelection === "Paper" && computerSelection === "Paper")
        || (playerSelection === "Scissors" && computerSelection === "Scissors")
    ) {
        // tie
        // displays score and this round
        scoreDiv.innerHTML = "You: " + playerScore + '<br />' + "Computer: " + computerScore + '<br />'
         + 'Tie! ' + playerSelection + ' ties ' + computerSelection;
        return;
    }
}

// function that displays Game Over after one score is 5
function gameOver () {
    if (playerScore === 5) {
        scoreDiv.innerHTML = 'Congrations! You Won!' + '<br />' + "You beat the Computer 5 to "
        + computerScore + '!' + '<br />' + 'Reload to Play Again!';
        // changes classes of buttons (will see it more than once)
        btns.forEach((i) => i.classList.toggle('hidden'));
        return;
    } else if (computerScore === 5) {
        scoreDiv.innerHTML = 'You Lost! Better Luck Next Time!' + '<br />' + "The Computer beat You 5 to "
             + playerScore + '!' + '<br />' + 'Reload to Play Again!';
        btns.forEach((i) => i.classList.toggle('hidden'));
        return;
    } else return;
}

// restart the game
restartBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    scoreDiv.innerHTML = "You: " + playerScore + '<br />' + "Computer: " + computerScore;
    btns.forEach((i) => i.classList.toggle('hidden'));
});