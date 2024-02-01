'use strict';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputElem = document.querySelector('#datetime-picker');
const buttonElem = document.querySelector('[data-start]');
const timerElement = document.querySelector('.timer');
let userSelectedDate;

flatpickr(inputElem, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

function onDateInput() {
  const init = Date.now;
  const choiceDate = inputElem.textContent;

  if (choiceDate > init) {
    console.log('hello');
  }
}

onDateInput();
