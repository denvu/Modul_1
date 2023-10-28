"use strict";

const cart = {
  items: [], //товары
  totalPrice: 0, //общая стоимость корзины
  count: 0, //количество товаров
  getTotalPrice: function () {
    return this.totalPrice;
  }, //получить общую стоимость товаров, метод возвращает значение свойства totalPrice

  add: function (name, price, quantity = 1) {
    const item = {
      name,
      price,
      quantity,
    };
    this.items.push(item);
    this.increaseCount(quantity);
    this.calculateItemPrice();
  }, //добавить товар

  increaseCount: function (num) {
    this.count += num;
  }, //увеличить количество товаров, Принимает один параметр(число) Увеличивает свойство count на это число

  calculateItemPrice: function () {
    this.totalPrice = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, //посчитать общую стоимость товаров, пересчитывает стоимость всей корзины используя метод reduce и записывает значение в totalPrice

  clear: function () {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  }, //очистить корзину, Очищает полностью нашу корзину, возвращает все значения в изначальные

  print: function () {
    console.log(JSON.stringify(this.items));
    console.log('Общая стоимость: ', this.totalPrice);
  }, //распечатать корзину, Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины
};

cart.add('Морковь', 15, 3);
cart.add('Лук', 10, 5);
cart.add('Томат', 20, 5);

cart.print();