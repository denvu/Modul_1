'use strict';

const cart = {
  items: [], // товары
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set totalPrice(value) {},
  // общая стоимость корзины
  count: 0, // количество товаров
  getTotalPrice() {
    return this.totalPrice;
  }, // получить общую стоимость товаров,  возвращает значение  totalPrice

  add(name, price, quantity = 1) {
    const item = {
      name,
      price,
      quantity,
    };
    this.items.push(item);
    this.increaseCount(quantity);
  }, // добавить товар

  increaseCount(num) {
    this.count += num;
  }, // Принимает один параметр(число) Увеличивает свойство count на это число

  calculateItemPrice() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity * ((100 - this.discount) / 100),
      0,
    );
  }, // пересчитывает стоимость корзины методом reduce и записывает в totalPrice

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  }, // Очищает полностью  корзину, возвращает все значения в изначальные

  print() {
    console.log(JSON.stringify(this.items));
    console.log('Общая стоимость: ', this.totalPrice);
  }, // Выводит в консоль JSON строку из массива и общую стоимость

  discount: 0,
  setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
  },
};

cart.add('Морковь', 15, 3);
cart.add('Лук', 100, 5);
cart.add('Томат', 20, 5);

cart.setDiscount('NEWYEAR');
console.log('Скидка ' + cart.discount + '%');

cart.print();
