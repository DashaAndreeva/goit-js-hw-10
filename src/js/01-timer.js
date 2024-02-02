'use strict';

import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'flatpickr/dist/flatpickr.min.css';

const inputElem = document.querySelector('#datetime-picker');
const buttonElem = document.querySelector('[data-start]');
const daysElem = document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');

buttonElem.addEventListener('click', () => {
  if (!timer.isActive) {
    if (timer.userSelectedDate && timer.userSelectedDate >= Date.now()) {
      timer.start();
      buttonElem.classList.add('active-button');
      buttonElem.classList.remove('inactive-button');
      inputElem.disabled = false;
      buttonElem.disabled = true; // Деактивуємо кнопку "Старт"
    } else {
      iziToast.show({
        icon: 'material-icons',
        iconColor: 'red',
        title: 'Please',
        message: 'choose a date in the future',
        color: 'red',
        position: 'topRight',
      });
    }
  } else {
    timer.stop();
    inputElem.disabled = true;
    buttonElem.disabled = false; // Активуємо кнопку "Старт"
  }
});

const timer = {
  intervalId: null,
  isActive: false,
  differenceInTime: 0,
  userSelectedDate: null,

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  },

  start() {
    if (!this.userSelectedDate || this.isActive) {
      return;
    }
    const startTime = this.userSelectedDate;
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      this.differenceInTime = startTime - currentTime;
      const timeInTimer = this.convertMs(this.differenceInTime);
      daysElem.textContent = this.padTime(timeInTimer.days);
      hoursElem.textContent = this.padTime(timeInTimer.hours);
      minutesElem.textContent = this.padTime(timeInTimer.minutes);
      secondsElem.textContent = this.padTime(timeInTimer.seconds);

      inputElem.disabled = true;
    }, 1000);
  },

  stop() {
    if (this.differenceInTime <= 0) {
      clearInterval(this.intervalId);
      this.isActive = false;
    }
  },

  padTime(value) {
    return String(value).padStart(2, '0');
  },
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: selectedDates => {
    const selectedDate = selectedDates[0];
    if (!timer.isActive) {
      timer.userSelectedDate = selectedDate;
      if (selectedDate < Date.now()) {
        iziToast.show({
          icon: 'material-icons',
          iconColor: 'red',
          title: 'Please',
          message: 'choose a date in the future',
          color: 'red',
          position: 'topRight',
        });
        buttonElem.classList.add('active-button');
        buttonElem.classList.remove('inactive-button');
        buttonElem.disabled = true; // Деактивуємо кнопку "Старт"
      } else {
        buttonElem.classList.remove('active-button');
        buttonElem.classList.add('inactive-button');
        buttonElem.disabled = false; // Активуємо кнопку "Старт"
      }
    } else {
      if (selectedDate < Date.now()) {
        iziToast.show({
          icon: 'material-icons',
          iconColor: 'red',
          title: 'Please',
          message: 'choose a date in the future',
          color: 'red',
          position: 'topRight',
        });
      } else {
        timer.stop();
        timer.userSelectedDate = selectedDate;
        inputElem.disabled = false;
      }
    }
  },
};

flatpickr(inputElem, options);
