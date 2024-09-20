const p1Counter = document.querySelector('#p1-score')
const p2Counter = document.querySelector('#p2-score')

const p1Btn = document.querySelector('#p1-button')
const p2Btn = document.querySelector('#p2-button')
const resetBtn = document.querySelector('#reset-button')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Btn.addEventListener('click', () => {
    updateScore(p1Score, p1Counter)
    p1Score++;
});

p2Btn.addEventListener('click', () => {
    updateScore(p2Score, p2Counter)
    p2Score++;
});

function updateScore(playerScore, playerCounter) {
    if(!isGameOver) {
        playerScore += 1;
        playerCounter.textContent = playerScore;
        if(playerScore === winningScore) {
            isGameOver = true;
        }
    }
}