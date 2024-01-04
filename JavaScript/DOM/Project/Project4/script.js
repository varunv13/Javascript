let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuesses = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const check = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function (events) {
        events.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    // validate guess is valid or not, between 1 to 100 or not and is a number or not
    if(!isNaN(guess) || guess >= 1 && guess <= 100){
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${random}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
    else alert("Please enter a valid number");
}

function checkGuess(guess) {
    // validates the guess, wheather the guess is high or low, or the target guess / random number
    if(guess === random) {
        displayMessage(`You guessed it right.`);
        endGame();
    }
    else if(guess < random){
        displayMessage(`Your number is too low`);
    }
    else displayMessage(`Your number is too high`);
}

function displayGuess(guess){
    // Displays the guess, cleans the input and update the prevGuess array
    userInput.value = ''; // cleaning up the user input
    userGuesses.innerHTML += ` ${guess}`;
    numGuess++;
    remainingGuesses.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    // Gives the message taken from the user
    check.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame">Start new game.</h2>';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (event) {
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        userGuesses.innerHTML = '';
        remainingGuesses.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}
