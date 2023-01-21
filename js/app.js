const fireworkContainer = document.querySelector(".fireworks-container");
const daysSpan = document.querySelector("#days");
const hoursSpan = document.querySelector("#hours");
const minutesSpan = document.querySelector("#minutes");
const secondsSpan = document.querySelector("#seconds");
const newYear = document.querySelector("#new-year");

const now = new Date();

newYear.innerHTML = now.getFullYear();

const countToDate = new Date("2023, 01, 22, 00:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();

  const distance = countToDate - now;

  console.log(distance);

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysSpan.innerHTML = days;
  hoursSpan.innerHTML = hours;
  minutesSpan.innerHTML = minutes;
  secondsSpan.innerHTML = seconds;

  if (distance <= 0) {
    daysSpan.innerHTML = "2";
    hoursSpan.innerHTML = "0";
    minutesSpan.innerHTML = "2";
    secondsSpan.innerHTML = "3";
    fireworks.start();
    clearInterval(countdownInterval);
  }
};

countdown();

const countdownInterval = setInterval(countdown, 1000);

const fireworks = new Fireworks(fireworkContainer, {
  speed: 4,
  acceleration: 1.05,
  friction: 1,
  gravity: 4,
  particles: 400,
  explosion: 10,
});
