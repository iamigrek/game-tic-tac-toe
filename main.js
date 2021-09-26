// const button = document.querySelectorAll('[data-main-btn]');
// const buttonClass = document.querySelectorAll('.game__btn');
// const status = document.querySelector('.status');

// let i = 0;

// let def = [];
// let win = [1, 1, 1, 0, 0, 0, 0, 0, 0];

// button.forEach(function (item) {
//   item.addEventListener('click', function (e) {
//     item.textContent = `${i % 2 == 0 ? 'O' : 'X'}`;
//     item.value = `${i % 2 == 0 ? 2 : 1}`;

//     def[this.dataset.mainBtn] = `${i % 2 == 0 ? 1 : 0}`;
//     i++;
//     console.log(def);
//     if (def == win) {
//       alert('WIN!');
//     }
//   });
// });

// const button = document.querySelectorAll('[data-main-btn]');
// const buttonClass = document.querySelectorAll('.game__btn');
// const status = document.querySelector('.status');

// let i = 0;

// let def = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// var winIndex = [
//   [1, 1, 1],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// button.forEach(function (item) {
//   item.addEventListener('click', function (e) {
//     item.textContent = `${i % 2 == 0 ? 'O' : 'X'}`;
//     item.value = `${i % 2 == 0 ? 2 : 1}`;

//     def[this.dataset.mainBtn] = i % 2 == 0 ? 1 : 0;
//     i++;
//     //
//     for (var k in winIndex) {
//       var win = true;
//       for (var j in winIndex[k]) {
//         var id = winIndex[k][j];
//         var ind = def.indexOf(id);

//         if (ind == -1) {
//           win = false;
//         }
//       }

//       if (win) console.log('win');
//     }
//   });
// });

// ========================

const button = document.querySelectorAll('[data-y]');
const buttonClass = document.querySelectorAll('.game__btn');
const status = document.querySelector('.status');

let i = 1;

let defx = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let defo = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

var winIndex = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  // [1, 4, 7],
  // [2, 5, 8],
  // [3, 6, 9],
  // [1, 5, 9],
  // [3, 5, 7],
];

button.forEach(function (item) {
  item.addEventListener('click', function (e) {
    item.textContent = `${i % 2 == 0 ? 'O' : 'X'}`;
    item.value = `${i % 2 == 0 ? 2 : 1}`;

    i % 2 == 0
      ? (defx[this.dataset.y][this.dataset.x] = parseInt(this.dataset.pos))
      : (defo[this.dataset.y][this.dataset.x] = parseInt(this.dataset.pos));

    console.log(defx);
    console.log(defo);
    for (let k = 0; k < 3; k++) {
      for (let l = 0; l < 3; l++) {
        console.log('===/===');
        console.log(defx[k]);

        console.log(winIndex[l]);
        console.log('===/===');
        if (defx[k].join() == winIndex[l].join()) {
          //для def нужно использовать двухмерный массив
          alert('O WIN!!');
        }
        if (defo[k].join() == winIndex[l].join()) {
          alert('X WIN!!');
        }
      }
    }
    i++;
  });
});
