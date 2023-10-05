'use strict'

const salary = Number(prompt('Введите сумму дохода:'));
let sumTax;

if (salary <= 15000) {
    sumTax = salary * 0.13; 
    console.log('Сумма налога составит ' + sumTax);
} else if (salary >= 15000 && salary <= 50000 ) {
    sumTax = (salary - 15000) * 0.2;   
    console.log('Сумма налога составит ' + sumTax);
} else {
    sumTax = (salary - 50000) * 0.3;
    console.log('Сумма налога составит ' + sumTax);
}