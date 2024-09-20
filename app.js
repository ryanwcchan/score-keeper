const resetBtn = document.querySelector('#reset-button')
const playTo = document.querySelector('#play-to')

let winningScore = 3;
let isGameOver = false;

const p1 = {
    score: 0,
    button: document.querySelector('#p1-button'),
    display: document.querySelector('#p1-score')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2-button'),
    display: document.querySelector('#p2-score')
}

p1.button.addEventListener('click', () => {
    updateScore(p1, p1.display)
});

p2.button.addEventListener('click', () => {
    updateScore(p2, p2.display)
});

resetBtn.addEventListener('click', () => {
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger')
    p2.display.classList.remove('has-text-success', 'has-text-danger')
    updateDisplay(p1.score, p1.display)
    updateDisplay(p2.score, p2.display)
})

playTo.addEventListener('change', function() {
    winningScore = parseInt(this.value)
})

function updateScore(player, playerDisplay) {
    if(!isGameOver) {
        player.score += 1;
        updateDisplay(player.score, playerDisplay)
        if(player.score === winningScore) {
            isGameOver = true;
            playerDisplay.classList.add('has-text-success')
            const scoreContainer = document.querySelector('#score-container');
            scoreContainer.querySelectorAll('span').forEach(e => {
                if(e !== playerDisplay) {
                    e.classList.add('has-text-danger')
                }
            })
        }
    }
}

function updateDisplay(playerScore, playerDisplay) {
    playerDisplay.textContent = playerScore;
}