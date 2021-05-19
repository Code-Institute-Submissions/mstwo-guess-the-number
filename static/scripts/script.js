'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let attempt = 20;
let topscore = 0;

// Check eventListner upon clicking
document.querySelector('.check').addEventListener(
    'click', function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess);
        // Scenario where check button hit without input
        if (!guess) {
            document.querySelector('.message').textContent = '🛑 No number! Type in your number.';   
        // Scenario where guess matches with the secretNumber
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Wow! Exact number!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';
            // Implementing topscore
            if (attempt > topscore) {
                topscore = attempt;
                document.querySelector('.topscore').textContent = topscore;
            }
        // scenario where the guess is higher or lower than the secreNumber
        } else if (guess !== secretNumber) {
            if (attempt > 1) {
                document.querySelector('.message').textContent = guess > secretNumber ? '📈 This number is high!': '📉 This number is low!';
                // Upon failing to guess correctly, number of attempts reduces to zero
                attempt--;
                document.querySelector('.attempt').textContent = attempt;
            } else {
                document.querySelector('.message').textContent = '😥 You lost the game!';
                document.querySelector('.attempt').textContent = 0;
            }
        }
    }
);
// Play again upon clicking 'Again' button
document.querySelector('.again').addEventListener(
    'click', function() {
        attempt = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.attempt').textContent = attempt;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').style.width = '15rem';
    }
);