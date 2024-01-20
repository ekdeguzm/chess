const chessboard = document.getElementById("chessboard");
const pieces = [
  "♜",
  "♞",
  "♝",
  "♛",
  "♚",
  "♝",
  "♞",
  "♜",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "♟",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♖",
  "♘",
  "♗",
  "♕",
  "♔",
  "♗",
  "♘",
  "♖",
];

function createChessboard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.classList.add((row + col) % 2 === 0 ? "white" : "black");
      square.dataset.row = row;
      square.dataset.col = col;
      square.innerHTML = pieces[row * 8 + col];
      square.addEventListener("click", handleSquareClick);
      chessboard.appendChild(square);
    }
  }
}

function handleSquareClick(event) {
  const row = event.target.dataset.row;
  const col = event.target.dataset.col;
  alert(`Clicked on square: ${row}, ${col}`);
  // You can implement chess piece movement logic here
}

createChessboard();
