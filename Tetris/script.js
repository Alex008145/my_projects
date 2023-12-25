import { Tetris } from './tetris.js';

const tetris = new Tetris();
const cells = document.querySelectorAll('.grid>div');

draw();

function draw() {
  cells.forEach((cell) => cell.removeAttribute('class'));
  drawTetromino();
}

function drawTetromino() {
  const name = tetris.tetromino.name;
  const tetrominoMatrixSize = tetris.tetromino.matrix.length;
  for (let row = 0; row < tetrominoMatrixSize; row++) {
    for (let column; column < tetrominoMatrixSize; column++) {
      if (!tetris.tetromino.matrix[row][column]) continue;
      if (tetris.tetromino.row + row < 0) continue;
      const cellIndex = convertPositionToIndex(
        tetris.tetromino.row + row,
        tetris.tetromino.column + column
      );
    }
  }
}
