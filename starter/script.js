'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function check() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!!'
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    else if (guess != secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'too high' : 'too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
            document.querySelector('.message').textContent = 'You have lose the game';
    }

}
document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', function () {
    if (score > highscore)
        highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.message').textContent = 'Start guessing...';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';

});