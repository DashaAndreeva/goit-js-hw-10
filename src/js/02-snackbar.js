'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formElem = document.querySelector('.form');
const inputElem = formElem.querySelector('input[name="delay"]');
const fulfilledRadio = formElem.querySelector('input[value="fulfilled"]');
const rejectedRadio = formElem.querySelector('[value="rejected"]');
const buttonElem = formElem.querySelector('button');

console.log(rejectedRadio);
