"use strict"

const getArray = function (elements, m, n, str) {
  let arr = [];

  for (let i = 0; i < elements; i++) {
    
    if (arr.length < elements) {
      
      while (arr.length < elements) {
        function getRandomNumber(m, n) {
          return Math.floor(Math.random() * (n - m + 1) + m);
        }

        const rnd = getRandomNumber(m, n);

        if (str == "even" && rnd % 2 == 0) {
          arr.push(rnd);
        }

        if (str == "odd" && rnd % 2 !== 0) {
          arr.push(rnd);
        }
      }
    }
  }

  console.log(arr);
}

getArray(25, 1, 100, "odd");