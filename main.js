const gameBtn = document.querySelectorAll('[data-pos]');
const gameBtnClear = document.querySelector('.game__clear');
const gameBtnY = document.querySelectorAll('[data-y]');
const gameBtnX = document.querySelectorAll('[data-x]');
const gameBtnPos = document.querySelectorAll('[data-pos]');
let i = 0;

const gamerX = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const gamerO = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

gameBtn.forEach(element => {
  element.addEventListener('click', function () {
    i % 2 == 0 ? (element.textContent = 'X') : (element.textContent = 'O');

    i % 2 == 0
      ? (gamerX[element.dataset.y][element.dataset.x] = parseInt(
          element.dataset.pos
        ))
      : (gamerO[element.dataset.y][element.dataset.x] = parseInt(
          element.dataset.pos
        ));
    i++;

    if (
      gamerX[0][0] * gamerX[0][1] * gamerX[0][2] == 6 ||
      gamerX[1][0] * gamerX[1][1] * gamerX[1][2] == 120 ||
      gamerX[2][0] * gamerX[2][1] * gamerX[2][2] == 504 ||
      gamerX[0][0] * gamerX[1][0] * gamerX[2][0] == 28 ||
      gamerX[0][1] * gamerX[1][1] * gamerX[2][1] == 80 ||
      gamerX[0][2] * gamerX[1][2] * gamerX[2][2] == 162 ||
      gamerX[0][0] * gamerX[1][1] * gamerX[2][2] == 45 ||
      gamerX[0][2] * gamerX[1][1] * gamerX[2][0] == 105
    ) {
      alert('WIN X');
      clear();
    } else if (
      gamerO[0][0] * gamerO[0][1] * gamerO[0][2] == 6 ||
      gamerO[1][0] * gamerO[1][1] * gamerO[1][2] == 120 ||
      gamerO[2][0] * gamerO[2][1] * gamerO[2][2] == 504 ||
      gamerO[0][0] * gamerO[1][0] * gamerO[2][0] == 28 ||
      gamerO[0][1] * gamerO[1][1] * gamerO[2][1] == 80 ||
      gamerO[0][2] * gamerO[1][2] * gamerO[2][2] == 162 ||
      gamerO[0][0] * gamerO[1][1] * gamerO[2][2] == 45 ||
      gamerO[0][2] * gamerO[1][1] * gamerO[2][0] == 105
    ) {
      alert('WIN O');
      clear();
    }
  });
});

gameBtnClear.addEventListener('click', clear);

function clear() {
  for (let f = 0; f < 3; f++) {
    gamerO[f] = [0, 0, 0];
    gamerX[f] = [0, 0, 0];
    gameBtn.forEach(item => {
      item.textContent = '';
    });
  }
}
