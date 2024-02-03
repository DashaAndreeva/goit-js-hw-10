'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form');
const inputElem = formElem.querySelector('input[name="delay"]');
const stateRadios = formElem.querySelectorAll('input[name="state"]');
let promiseStatus = '';

function createPromise(e) {
  e.preventDefault();

  const delay = inputElem.value;

  for (let i = 0; i < stateRadios.length; i++) {
    if (stateRadios[i].checked) {
      promiseStatus = stateRadios[i].value;
      break;
    }
  }

  const promise = new Promise((resolve, reject) => {
    if (promiseStatus === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else if (promiseStatus === 'rejected') {
      setTimeout(() => reject(delay), delay);
    }
  });

  promise
    .then(delay => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
        color: 'green',
      });
    })
    .catch(delay => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
        color: 'red',
      });
    });
}

formElem.addEventListener('submit', createPromise);
