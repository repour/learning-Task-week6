import './style.css'
const topData = prompt("Please enter your three top data seperated with comma").split(",").map(Number)
const centerData = prompt("Please enter your three center data seperated with comma").split(",").map(Number)
const bottomData = prompt("Please enter your three bottom data seperated with comma").split(",").map(Number)
const currentState = [[...topData] , [...centerData] , [...bottomData]];
console.log(currentState);

function checkTicTacToe(board) {

  for (let i = 0; i < 3; i++) {

    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
          if (board[i][0] === 1) {
              return "1 won";
          } else if (board[i][0] === 2) {
              return "2 won";
          }
      }
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
          if (board[0][i] === 1) {
              return "1 won";
          } else if (board[0][i] === 2) {
              return "2 won";
          }
      }
  }

  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      if (board[0][0] === 1) {
          return "1 won";
      } else if (board[0][0] === 2) {
          return "2 won";
      }
  }
  if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      if (board[0][2] === 1) {
          return "1 won";
      } else if (board[0][2] === 2) {
          return "2 won";
      }
  }

  // Check if the game is still ongoing
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (board[i][j] === 0) {
              return "Game not yet finished";
          }
      }
  }
  return "It's a draw";
}

// Example usage:
const board = [
  [0, 0, 1],
  [0, 1, 2],
  [2, 1, 0]
];

console.log(checkTicTacToe(currentState));
