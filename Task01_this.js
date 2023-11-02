'use strict';

// задание на this

const rectangle = {
  width: 5,
  height: 5,
  setWidth(width) {
    if (typeof width === 'number') {
      this.width = width;
    } else {
      console.log('Введите число!');
    }
  },

  setHeight(height) {
    if (typeof height === 'number') {
      this.height = height;
    } else {
      console.log('Введите число!');
    }
  },

  getPerimeter() {
    return (this.width + this.height) * 2 + 'см';
  },

  getArea() {
    return this.width * this.height + 'см';
  },
};

rectangle.setWidth(2);
rectangle.setHeight(6);

console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());
