'use strict';

const buttonOpen = document.querySelectorAll('.show-modal');
const buttonClose = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < buttonOpen.length; i++)
  buttonOpen[i].addEventListener('click', open);

buttonClose.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function (key) {
  if (key.key === 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});
