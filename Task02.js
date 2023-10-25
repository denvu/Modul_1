"use strict";

const getArray = function (elements, m, n) {
  let arr = [];

  if (m < n) {
    for (let i = 0; i < elements; i++) {
      if (arr.length < elements) {
        function getRandomNumber(m, n) {
          return Math.floor(Math.random() * (n - m + 1) + m);
        }

        const rnd = getRandomNumber(m, n);

        arr.push(rnd);
      } else {
        return;
      }
    }
  }

  if (m > n) {
    for (let i = 0; i < elements; i++) {
      if (arr.length < elements) {
        function getRandomNumber(n, m) {
          return Math.floor(Math.random() * (m - n + 1) + n);
        }

        const rnd = getRandomNumber(n, m);

        arr.push(rnd);
      } else {
        return;
      }
    }
  }

  console.log(arr);
};

getArray(5, 15, 10);