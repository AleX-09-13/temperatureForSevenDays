import { dataNamber } from './01data.js';
import { dayName } from './02dayName.js';
import fetchWeatherData from './03temp.mjs';

//Получаем дату в первой колонке
const data = dataNamber;

let cell11 = document.getElementById('cell11');
cell11.innerHTML = `${data(0)}`;

const cell21 = document.getElementById('cell21');
cell21.innerHTML = `${data(1)}`;

const cell31 = document.getElementById('cell31');
cell31.innerHTML = `${data(2)}`;

const cell41 = document.getElementById('cell41');
cell41.innerHTML = `${data(3)}`;

const cell51 = document.getElementById('cell51');
cell51.innerHTML = `${data(4)}`;

const cell61 = document.getElementById('cell61');
cell61.innerHTML = `${data(5)}`;

const cell71 = document.getElementById('cell71');
cell71.innerHTML = `${data(6)}`;

//***

//Получаем названия дней во второй колонке
const nameDay = dayName;

const cell12 = document.getElementById('cell12');
cell12.innerText = `${nameDay(6)}`;

const cell22 = document.getElementById('cell22');
cell22.innerText = `${nameDay(0)}`;

const cell32 = document.getElementById('cell32');
cell32.innerText = `${nameDay(1)}`;

const cell42 = document.getElementById('cell42');
cell42.innerText = `${nameDay(2)}`;

const cell52 = document.getElementById('cell52');
cell52.innerText = `${nameDay(3)}`;

const cell62 = document.getElementById('cell62');
cell62.innerText = `${nameDay(4)}`;

const cell72 = document.getElementById('cell72');
cell72.innerText = `${nameDay(5)}`;
//***

//Получаем температуру в третьей колонке
fetchWeatherData(0).then((tempC) => {
  const cell13 = document.getElementById('cell13');
  cell13.innerText = `${tempC}`;
});

fetchWeatherData(1).then((tempC) => {
  const cell23 = document.getElementById('cell23');
  cell23.innerText = `${tempC}`;
});

fetchWeatherData(2).then((tempC) => {
  const cell33 = document.getElementById('cell33');
  cell33.innerText = `${tempC}`;
});

fetchWeatherData(3).then((tempC) => {
  const cell43 = document.getElementById('cell43');
  cell43.innerText = `${tempC}`;
});

fetchWeatherData(4).then((tempC) => {
  const cell53 = document.getElementById('cell53');
  cell53.innerText = `${tempC}`;
});

fetchWeatherData(5).then((tempC) => {
  const cell63 = document.getElementById('cell63');
  cell63.innerText = `${tempC}`;
});

fetchWeatherData(6).then((tempC) => {
  const cell73 = document.getElementById('cell73');
  cell73.innerText = `${tempC}`;
});

// ****
