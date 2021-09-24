const button = document.querySelectorAll('[data-main-btn]');
const buttonClass = document.querySelectorAll('.game__btn');
const status = document.querySelector('.status');

const button1 = document.querySelector('#btn-1');
const button2 = document.querySelector('#btn-2');
const button3 = document.querySelector('#btn-3');

const button4 = document.querySelector('#btn-4');
const button5 = document.querySelector('#btn-5');
const button6 = document.querySelector('#btn-6');

const button7 = document.querySelector('#btn-7');
const button8 = document.querySelector('#btn-8');
const button9 = document.querySelector('#btn-9');

let i = 0;
let res = 0;

button.forEach(function (item) {
  item.addEventListener('click', function (e) {
    item.textContent = `${i % 2 == 0 ? 'X' : 'O'}`;
    item.value = `${i % 2 == 0 ? 2 : 1}`;
    i++;

    if (
      button1.value + button2.value + button3.value == 111 ||
      button4.value + button5.value + button6.value == 111 ||
      button7.value + button8.value + button9.value == 111 ||
      button7.value + button4.value + button1.value == 111 ||
      button8.value + button5.value + button2.value == 111 ||
      button9.value + button6.value + button3.value == 111 ||
      button9.value + button5.value + button1.value == 111 ||
      button7.value + button6.value + button3.value == 111
    ) {
      status.textContent = 'ПОБЕДИЛ "О"';
    } else if (
      button1.value + button2.value + button3.value == 222 ||
      button4.value + button5.value + button6.value == 222 ||
      button7.value + button8.value + button9.value == 222 ||
      button7.value + button4.value + button1.value == 222 ||
      button8.value + button5.value + button2.value == 222 ||
      button9.value + button6.value + button3.value == 222 ||
      button9.value + button5.value + button1.value == 222 ||
      button7.value + button6.value + button3.value == 222
    ) {
      status.textContent = 'ПОБЕДИЛ "Х"';
    } else {
      status.textContent = 'Игра началась, пока что ничья!';
    }
  });
});
