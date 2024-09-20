const p1Counter = document.querySelector('#p1-score')
const p2Counter = document.querySelector('#p2-score')

const p1Btn = document.querySelector('#p1-button')
const p2Btn = document.querySelector('#p2-button')
const resetBtn = document.querySelector('#reset-button')

const playTo = document.querySelector('#play-to')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Btn.addEventListener('click', () => {
    updateScore(p1Score, p1Counter)
    p1Score++;
});

p2Btn.addEventListener('click', () => {
    updateScore(p2Score, p2Counter)
    p2Score++;
});

resetBtn.addEventListener('click', () => {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Counter.classList.remove('winner', 'loser')
    p2Counter.classList.remove('winner', 'loser')
    updateDisplay(p1Score, p1Counter)
    updateDisplay(p2Score, p2Counter)
})

playTo.addEventListener('change', function() {
    winningScore = parseInt(this.value)
})

function updateScore(playerScore, playerCounter) {
    if(!isGameOver) {
        playerScore += 1;
        updateDisplay(playerScore, playerCounter)
        if(playerScore === winningScore) {
            isGameOver = true;
            playerCounter.classList.add('winner')
            const scoreContainer = document.querySelector('#score-container');
            scoreContainer.querySelectorAll('span').forEach(e => {
                if(e !== playerCounter) {
                    e.classList.add('loser')
                }
            })
        }
    }
}

function updateDisplay(playerScore, playerCounter) {
    playerCounter.textContent = playerScore;
}