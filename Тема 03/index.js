'use strict'

{
  const productName = 'Pen';
  const productAmount = 155;
  const productСategory = 'office';
  const productPrice = 25;

  console.log(productName);
  console.log('Общая сумма товара ', productAmount*productPrice);
}

{
    const productName = 'Булочка с корицей';
    const productAmount = 10;
    const productСategory = 'Хлебобулочные изделия';
    const productPrice = 45;
  
    console.log(productName);
    console.log('Общая сумма товара ', productAmount*productPrice);
}

{
  const productName = 'Свеча';
  const productAmount = 25;
  const productСategory = 'Декор';
  const productPrice = 93;

  console.log(productName);
  console.log('Общая сумма товара ', productAmount*productPrice);
}

const productName = prompt('Введите наименование товара');
const productAmount = Number(prompt('Введите количество товара'));
const productСategory = prompt('Введите категорию товара');
const productPrice = Number(prompt('Введите цену товара'));

console.log('Тип данных: ' + typeof productName);
console.log('Тип данных: ' + typeof productAmount);
console.log('Тип данных: ' + typeof productСategory);
console.log('Тип данных: ' + typeof productPrice);

console.log('На складе ' + productAmount + ' единиц товара ' + productName + ' на сумму ' + productAmount*productPrice + ' деревянных');

