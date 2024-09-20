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
    updateScore(p1, p2)
});

p2.button.addEventListener('click', () => {
    updateScore(p2, p1)
});

resetBtn.addEventListener('click', () => {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0
        p.display.classList.remove('has-text-success', 'has-text-danger')
        updateDisplay(p.score, p.display)
        p.button.disabled = false;
    }
})

playTo.addEventListener('change', function() {
    winningScore = parseInt(this.value)
})

function updateScore(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        updateDisplay(player.score, player.display)
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

function updateDisplay(playerScore, playerDisplay) {
    playerDisplay.textContent = playerScore;
}