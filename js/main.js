const gameBtn = document.querySelectorAll('[data-pos]');
const gameBtnClear = document.querySelector('.game__clear');
const gameInfo = document.querySelector('.game__info');
const gamePlayer1 = document.querySelector('.settings__player1');
const gamePlayer2 = document.querySelector('.settings__player2');
const gameStatus1 = document.querySelector('.settings__status1');
const gameStatus2 = document.querySelector('.settings__status2');
let i = 0;

winCounter1 = 0;
winCounter2 = 0;

const gamerX = [[], [], []];

const gamerO = [[], [], []];

gameBtn.forEach(element => {
  element.addEventListener('click', function () {
    if (element.innerHTML == ' ') {
      if (i % 2 == 0) {
        // element.textContent = 'X';
        if (
          !element.classList.contains('game__o') &&
          !element.classList.contains('game__x')
        ) {
          element.classList.add('game__x');
          gamerX[element.dataset.y][element.dataset.x] = element.dataset.pos;
          i++;
        } else {
          gameInfo.textContent = 'section occupied!!!';
        }
      } else {
        // element.textContent = 'O';
        if (
          !element.classList.contains('game__o') &&
          !element.classList.contains('game__x')
        ) {
          element.classList.add('game__o');
          gamerO[element.dataset.y][element.dataset.x] = element.dataset.pos;
          i++;
        } else {
          gameInfo.textContent = 'section occupied!!!';
        }
      }
    }
    console.log(i);
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
      gameInfo.textContent = `Win ${gamePlayer1.value}`;
      winCounter1 = winCounter1 + 1;
      gameStatus1.textContent = winCounter1;
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
      gameInfo.textContent = `Win ${gamePlayer2.value}`;
      winCounter2 = winCounter2 + 1;
      gameStatus2.textContent = winCounter2;
      clear();
    } else if (i == 9) {
      gameInfo.textContent = 'draw';
      clear();
    }
  });
});

gameBtnClear.addEventListener('click', clear);

function clear() {
  for (let f = 0; f < 3; f++) {
    gamerO[f] = [0, 0, 0];
    gamerX[f] = [0, 0, 0];
    i = 0;
    gameBtn.forEach(item => {
      item.classList.remove('game__o');
      item.classList.remove('game__x');
    });
  }
}
