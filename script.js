"use strict";
//choose elements for days, hours, mins, seconds
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const elArray = [daysEl, hoursEl, minutesEl, secondsEl];
const eventEl = document.querySelector("#event-name");
const birthday = prompt(
  "What Date Are You Waiting For?\nEnter Date...\n(format example:1 jun 2023)"
);
const eventName = prompt("Enter Event Name...");
eventEl.innerHTML = eventName;

const countdown = function () {
  const birtDate = new Date(birthday);
  const currentDate = new Date();
  const distance = birtDate - currentDate;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
};

countdown();

// setInterval(countdown, 1000);
