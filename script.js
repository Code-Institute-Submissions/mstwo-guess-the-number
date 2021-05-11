'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Check button click
document.querySelector('.check').addEventListener(
    'click', function() {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if (!guess) {
            document.querySelector('.message').textContent = '🛑 No number!';
            // Check button click in case of no input

        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Wow! Exact number';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#1F2833';
            document.querySelector('.number').style.width = '30rem';
        }
        // If guess matches with the secretNumber

    }
)