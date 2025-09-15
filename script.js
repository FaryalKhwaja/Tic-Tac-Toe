let cells = document.querySelectorAll(".cell");
let turnDisplay = document.querySelector(".turn");

let currentPlayer = "X";

cells.forEach(cell => {
    cell.addEventListener("click", () => {
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
    });
});

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6] 
];

