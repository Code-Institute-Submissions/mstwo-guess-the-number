'use strict';

// Variable for random numbers between (1 to/and 20) without decimals
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

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
            document.querySelector('.message').textContent = '🎉 Wow! Exact number!';
            // Upon guessing correctly, secretNumber is displayed
            document.querySelector('.number').textContent = secretNumber;
            // Change in style upon winning: both bg & number width
            document.querySelector('body').style.backgroundColor = '#1F2833';
            document.querySelector('.number').style.width = '30rem';

            // Highscore feature
            if (score > highscore) {
                // Here the highscore becomes this new current score
                highscore = score;
                // Then, display the current highscore
                document.querySelector('.highscore').textContent = highscore;
            }

        // The number is higher or lower than the correct guess
        } else if (guess !== secretNumber) {
            if (score > 1) {
                // ternary operator for both high and low number missmatching scenarios
                document.querySelector('.message').textContent = guess > secretNumber ? 'This number is high!': 'This number is low';
                // Score decrement upon guess matching trials
                score--;
                document.querySelector('.score').textContent = score;
            } else { 
                // If all fail attempts count the score down to zero
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
        // Value reassigned to generate a new secretNumber
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        // Resetting the game to the initial settings after guess attempt
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        // Resetting background color to initial settings after guess attempt
        document.querySelector('body').style.backgroundColor = '#222';
        // Resetting guess number width to initial settings after guess attempt
        document.querySelector('.number').style.width = '15rem';
    }
);