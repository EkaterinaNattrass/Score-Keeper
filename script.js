const p1Button = document.querySelector("#btn1");
const p2Button = document.querySelector("#btn2");
const resetButton = document.querySelector("#btn3");
const p1Span = document.querySelector("#pl1Span");
const p2Span = document.querySelector("#pl2Span");
const winningScoreSelect = document.querySelector("#playTo");

let p1Score = 0;
let p2Score = 0;
let gameOver = false;

p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score += 1;
        p1Span.innerText = p1Score;
        if (p1Score === winningScore) {
            gameOver = true
        }
    }
})

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            gameOver = true
        }
        p2Span.innerText = p2Score;
    }
})

resetButton.addEventListener("click", function() {
    gameOver = false;
    p1Score = 0;
    p1Span.innerText = p1Score
    p2Score = 0;
    p2Span.innerText = p2Score;
})

winningScoreSelect.addEventListener ("change", function(){
    winningScore = parseInt(this.value);
}
)
