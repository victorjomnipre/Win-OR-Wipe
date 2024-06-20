const userGuess = document.getElementById("guessNumber");
const button = document.getElementById("myBTN");
const userAttempt = document.getElementById("myAttempt");
const result = document.getElementById("myResult");

const minNum = 1;
const maxNum = 50;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let running = true;

button.onclick = function() {
    if (!running) {
        gameReset();
        return;
    }

    let guess = Number(userGuess.value);

    if (attempts >= 10) {
        running = false;
        result.textContent = `5 Limit exceeded, OS Deleted!`;
        button.textContent = "Try Again";
    } else if (isNaN(guess)) {
        result.textContent = "Please enter a valid number";
    } else if (guess < minNum || guess > maxNum) {
        result.textContent = `Please enter a number between ${minNum} - ${maxNum}`;
    } else {
        attempts++;
        userAttempt.textContent = `Attempts: ${attempts}`;
        if (guess < answer) {
            result.textContent = "Tama ka nubo, MANGO hahaha!!";
        } else if (guess > answer) {
            result.textContent = "Tama ka taas, MANGO hahaha!!";
        } else {
            result.textContent = `Belaysi sampad ba! sakto ${answer}.`;
            button.textContent = "Try Again";
            running = false;
        }
    }
}

function gameReset() {
    attempts = 0;
    running = true;
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    button.textContent = "Submit";
    result.textContent = "...";
    userAttempt.textContent = `Attempts: ${attempts}`;
    userGuess.value = '';
}