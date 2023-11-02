'use strict';

// задание на на рекурсию

const arr = [];

// eslint-disable-next-line require-jsdoc
function getArray(arr) {
  const rnd = Math.round(Math.random() * 10);
  arr.push(rnd);
  const sumElemeitsInArray = arr.reduce((acc, element) => acc + element);

  if (sumElemeitsInArray >= 50) {
    console.log(arr);
    console.log('Сумма элемантов массива: ' + sumElemeitsInArray);
    return arr;
  } else {
    getArray(arr);
  }
}

getArray(arr);

