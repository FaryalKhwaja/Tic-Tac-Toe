let cells = document.querySelectorAll(".cell");
let turnDisplay = document.querySelector(".turn");

let currentPlayer = "X";
let gameOver = false;

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (gameOver) return;
        if (cell.textContent !== "") return;
        if (cell.textContent === "") {
            cell.textContent = currentPlayer;
        }
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
        turnDisplay.textContent = `${currentPlayer} Turn`; 
        checkWinner();
    });
});

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6] 
];

function checkWinner () {
    for (let i = 0; i < winPatterns.length; i++) {
        let patterns = winPatterns[i];
        let [a, b, c] = patterns;
        let cellA = cells[a].textContent;
        let cellB = cells[b].textContent;
        let cellC = cells[c].textContent;
        if (cellA && cellA === cellB && cellA === cellC) {
            turnDisplay.textContent = `${cellA} wins!`;
            gameOver = true;
            return;
        }
        if (Array.from(cells).every(function (cell) {
            return cell.textContent;
        })) {
            turnDisplay.textContent = `It's a draw!`;
            gameOver = true;
        }
    }
}