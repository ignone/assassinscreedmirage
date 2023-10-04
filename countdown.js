// Countdown Digits
const updateCountdown = () => {
  const dateElement = document.getElementById("countdown");
  const targetDate = new Date("2023-10-05T00:00:00");
  const currentDate = new Date();
  const timeLeft = targetDate - currentDate;

  if (timeLeft <= 0) {
    dateElement.innerHTML = "0";
  } else {
    if (timeLeft <= 86400000) {
      // Less than or equal to 24 hours (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      dateElement.innerHTML = hours;
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      dateElement.innerHTML = days;
    }
  }
};

updateCountdown();

// Countdown Text
const updateCountdownText = () => {
  const dateElement = document.getElementById("countdown-text"); // Change "countdown" to "countdown-text"
  const numberWrap = document.querySelector(".countdown__number-wrap");
  const targetDate = new Date("2023-10-05T00:00:00");
  const currentDate = new Date();
  const timeLeft = targetDate - currentDate;

  if (timeLeft <= 0) {
    numberWrap.style.display = "none";
    dateElement.innerHTML = `
  <div class="preloader__loading-wrap"><img src="/images/Group-49.svg" loading="lazy" alt="" class="incense-bg cc-preloader">
    <div class="h3 cc-preloader">Available Now</div>
  </div>`;
  } else {
    if (timeLeft <= 86400000) {
      // Less than or equal to 24 hours (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
      dateElement.innerHTML = "Hours until launch";
    } else {
      dateElement.innerHTML = "Days until launch";
    }
  }
};

updateCountdownText();
