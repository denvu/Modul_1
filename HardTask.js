'use strict'

const allСashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
  ];

  const getAveragePriceGoods = function () {

    let totalPrice = 0;

    for (let i = 0; i < allСashbox.length; i++) {
        totalPrice += allСashbox[i][1];
  }
}
console.log(totalPrice);