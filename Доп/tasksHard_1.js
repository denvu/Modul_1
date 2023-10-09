'use strict'

const salary = Number(prompt('Введите сумму дохода:'));

if (salary <= 15000) {
    console.log('Сумма налога составит ' + salary * 0.13);
} else if (salary >= 15000 && salary <= 50000 ) {
    console.log('Сумма налога составит ' + salary * 0.2);
} else {
    console.log('Сумма налога составит ' + salary * 0.3);
}