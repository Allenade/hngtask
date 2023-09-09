const button = document.querySelector(".card-btn");
const card = document.querySelector(".card");
const currentDay = document.getElementById("currentDay");
const currentUTCTime = document.getElementById("currentUTCTime");

// click button
button.addEventListener("click", () => {
  card.classList.toggle("change");
});

// current day of the week

const today = new Date();
const dayOfWeek = today.getDay();
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
currentDay.innerText = daysOfWeek[dayOfWeek];

// get current utc time
const TImeMilliSeconds = new Date().getTime();
currentUTCTime.innerText = TImeMilliSeconds;
