const calanderMonth = document.querySelector(".calanderMonth");
const calanderDay = document.querySelector(".calanderDay");
const calanderDate = document.querySelector(".calanderDate");
const calanderYera = document.querySelector(".calanderYera");

const today = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

calanderDate.innerHTML = today.getDate();
calanderDay.innerHTML = days[today.getDay()];
calanderMonth.innerHTML = month[today.getMonth()];
calanderYera.innerHTML = today.getFullYear();
