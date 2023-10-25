"use strict";

const getArray = function (elements) {
  let arr = [];

  for (let i = 0; i < elements; i++) {
    if (arr.length < elements) {
      const rnd = Math.round(Math.random() * 100);

      arr.push(rnd);
    } else {
      return;
    }
  }

  console.log(arr);
};

getArray(100);
