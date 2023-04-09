'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');
console.log(btnsShowModalWindow);

const showModalWindow = function () {
  console.log('Click!');
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // modalWindow.style.display = 'block';
};

const closeModalWidow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModalWindow.length; i++) {
  console.log(btnsShowModalWindow[i].textContent);

  btnsShowModalWindow[i].addEventListener('click', showModalWindow);
}

btnCloseModalWindow.addEventListener('click', closeModalWidow);

overlay.addEventListener('click', closeModalWidow);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWidow();
  }
});
