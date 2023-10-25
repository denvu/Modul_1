"use strict";

const userNamber = prompt("Введите любое число от 1 до 100:", "1 - 100");
const rnd = Math.round(Math.random() * 100);
console.log(rnd); //просмотр загаданного числа

function checkNumber(userNamber) {
  if (userNamber === null) {
    return;
  } else {
    if (userNamber > rnd) {
        alert("Меньше!");
        const userNamber = prompt("Введите любое число от 1 до 100:");
        checkNumber(userNamber);
      }
  
      if (userNamber < rnd) {
        alert("Больше!");
        const userNamber = prompt("Введите любое число от 1 до 100:");
        checkNumber(userNamber);
      }
  
      if (userNamber == rnd) {
        alert("Правильно!");
      }
  
      if (isNaN(userNamber)) {
        alert("Введите число!");
        const userNamber = prompt("Введите любое число от 1 до 100:");
        checkNumber(userNamber);
      }
  }
}

checkNumber(userNamber);
