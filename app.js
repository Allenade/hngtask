const button = document.querySelector(".card-btn");
const card = document.querySelector(".card");
button.addEventListener("click", () => {
  card.classList.toggle("change");
});

function updateClock() {
  let now = new Date();
  let dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  if (hou == 0) {
    hou = 12;
  }

  if (hou > 12) {
    pe = "PM";
    hou = hou - 12;
  }

  let months = [
    "january",
    "february",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "september",
    "october",
    "November",
    "December",
  ];
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednessday",
    "thursday",
    "Friday",
  ];
  let ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];
  let values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];
  for (let i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).innerText = values[i];
}

setInterval(() => {
  updateClock();
}, 1000);
