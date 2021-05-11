const _board = [
    ['.', '9', '.', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
];

sapnaSudokuSolver(_board);

console.log(_board[0][0] + " " + _board[0][1] + " " + _board[0][2] + " " + _board[0][3] + " " + _board[0][4] + " " + _board[0][5] + " " + _board[0][6] + " " + _board[0][7] + " " + _board[0][8]);
console.log(_board[1][0] + " " + _board[1][1] + " " + _board[1][2] + " " + _board[1][3] + " " + _board[1][4] + " " + _board[1][5] + " " + _board[1][6] + " " + _board[1][7] + " " + _board[1][8]);
console.log(_board[2][0] + " " + _board[2][1] + " " + _board[2][2] + " " + _board[2][3] + " " + _board[2][4] + " " + _board[2][5] + " " + _board[2][6] + " " + _board[2][7] + " " + _board[2][8]);
console.log(_board[3][0] + " " + _board[3][1] + " " + _board[3][2] + " " + _board[3][3] + " " + _board[3][4] + " " + _board[3][5] + " " + _board[3][6] + " " + _board[3][7] + " " + _board[3][8]);
console.log(_board[4][0] + " " + _board[4][1] + " " + _board[4][2] + " " + _board[4][3] + " " + _board[4][4] + " " + _board[4][5] + " " + _board[4][6] + " " + _board[4][7] + " " + _board[4][8]);
console.log(_board[5][0] + " " + _board[5][1] + " " + _board[5][2] + " " + _board[5][3] + " " + _board[5][4] + " " + _board[5][5] + " " + _board[5][6] + " " + _board[5][7] + " " + _board[5][8]);
console.log(_board[6][0] + " " + _board[6][1] + " " + _board[6][2] + " " + _board[6][3] + " " + _board[6][4] + " " + _board[6][5] + " " + _board[6][6] + " " + _board[6][7] + " " + _board[6][8]);
console.log(_board[7][0] + " " + _board[7][1] + " " + _board[7][2] + " " + _board[7][3] + " " + _board[7][4] + " " + _board[7][5] + " " + _board[7][6] + " " + _board[7][7] + " " + _board[7][8]);
console.log(_board[8][0] + " " + _board[8][1] + " " + _board[8][2] + " " + _board[8][3] + " " + _board[8][4] + " " + _board[8][5] + " " + _board[8][6] + " " + _board[8][7] + " " + _board[8][8]);


function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}

function sapnaSudokuSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '.') { 
        for (let k = 1; k <= 9; k++) { 
          if (isValid(data, i, j, k)) { 
            data[i][j] = `${k}`;
          if (sapnaSudokuSolver(data)) {
           return true; 
          } else {
           data[i][j] = '.'; 
          }
         }
       }
       return false;  
     }
   }
 }
 return true;
}


