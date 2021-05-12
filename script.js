'use strict';

// Variable for random numbers between (1 to/and 20) without decimals
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Check button click
document.querySelector('.check').addEventListener(
    'click', function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // Check button click in case of no input
        if (!guess) {
            document.querySelector('.message').textContent = '🛑 No number!';   
        // If guess matches with the secretNumber
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Wow! Exact number';
            document.querySelector('.number').textContent = secretNumber;
            // Change in style upon winning: both bg & number width
            document.querySelector('body').style.backgroundColor = '#1F2833';
            document.querySelector('.number').style.width = '30rem';
        // The number is higher or lower than the correct guess
        } else if (guess !== secretNumber) {
            if (score > 1) {
                // ternary operator for both high and low number missmatching scenarios
                document.querySelector('.message').textContent = guess > secretNumber ? 'This number is high!': 'This number is low';
                // Score decrement upon guess matching trials
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('message').textContent = '😥 You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
        }
    }
);
// 'Again' button click
document.querySelector('.again').addEventListener(
    'click', function() {
        score = 20;
        // Value reassigned from the let secretNumber variable
        secretNumber = Math.trunc(Math.random() * 20) + 1;
                
    }
);