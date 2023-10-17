'use strict'

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

let getAverageValue = allСashbox.reduce(function(previousValue, item, index, array) {
    return item + previousValue;
}, 0);
console.log('Средний чек '+ Math.floor(getAverageValue / allСashbox.length));