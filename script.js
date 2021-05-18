'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let topscore = 0;

document.querySelector('.check').addEventListener(
    'click', function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if (!guess) {
            document.querySelector('.message').textContent = '🛑 No number! Type in your number.';   

        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Wow! Exact number!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';

            if (score > topscore) {
                topscore = score;
                document.querySelector('.topscore').textContent = topscore;
            }
        } else if (guess !== secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = guess > secretNumber ? '📈 This number is high!': '📉 This number is low!';

                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '😥 You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
        }
    }
);

document.querySelector('.again').addEventListener(
    'click', function() {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').style.width = '15rem';
    }
);