"use strict";

const days = ["Восресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let today = new Date();
let arr = [];

const startDate = () => {
  today = new Date();
  getHello();
  getDay();
  getTime();
  getnewYearDays();
  toHTML();
  arr = [];
};

const getHello = () => {
  let hello;
  switch (true) {
    case today.getHours() < 4:
      hello = "Доброй ночи!";
      break;
    case today.getHours() >= 4 && today.getHours() < 12:
      hello = "Доброе утро!";
      break;
    case today.getHours() >= 12 && today.getHours() < 17:
      hello = "Добрый день!";
      break;
    case today.getHours() >= 17 && today.getHours() <= 23:
      hello = "Добрый вечер!";
      break;
  }
  arr.push(hello);
};

const getDay = () => {
  let day = days[today.getDay()];
  arr.push(`Сегодня: ${day}`);
};
const getTime = () => {
  let time = today.toLocaleTimeString("en");
  arr.push(`Текущее время: ${time}`);
};

const getnewYearDays = () => {
  const dateNY = new Date("1 january 2022");
  const newYearTime = dateNY.getTime() - today.getTime();
  const newYearDays = Math.floor(newYearTime / 1000 / 60 / 60 / 24);
  arr.push(`До нового года осталось ${newYearDays} дней`);
};

const toHTML = () => {
  document.body.innerHTML = "";
  arr.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item;
    document.body.append(div);
  });
};

setInterval(startDate, 1000);
