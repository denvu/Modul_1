"use strict";

function getArrayLeapYear(n, m) {
  let arr = [];
  let year = n;

  if (n < m) {
    for (let i = n - 1; i <= m; i++) {
      year = i + 1;

      if (year % 4 == 0) {
        if (year % 100 !== 0 && year % 400 == 0) {
          return year;
        }

        arr.push(year);
      }
    }
  }

  if (n > m) {
    for (let i = m - 1; i <= n; i++) {
      year = i + 1;

      if (year % 4 == 0) {
        if (year % 100 !== 0 && year % 400 == 0) {
          return year;
        }

        arr.push(year);
      }
    }
  }
  console.log(arr);
}

getArrayLeapYear(-100, 100);
