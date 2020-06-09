// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

// EXERCISE-1:
// Есть две функции конструктор! Нужно c помощью prototype сделать second родителем first!
// ANSWER:

function A(name) {
  this.name = name;
}

function B(lastName) {
  this.lastName = lastName;
}

const second = new B('Shakhov');
A.prototype = second;

const first = new A('Sergei');

first;

// EXERCISE-2:
// Есть обьекты. Необходимо сделать vasia родителем для petia, а petia для boria.
// ТО есть вася отец все отцов 
// ANSWER:
const vasia = { m: 23};
const petia = { n: 2};
const boria = { q: 2};

boria.__proto__ = petia;
petia.__proto__ = vasia;

boria;

// EXERCISE-3:
// Написать класс Product, который принимает три поля цена, название, количество. 
// Необходимо реализовать два метода, первый сравнивает два продукта и выводит строку
// в которой присутствует разница по цене и количеству. Второй метод принимает любое количество продуктов и возвращает общую цену.
// ANSWER:

// Если я правильно понял условие задания, то решение будет таким:
class Product {
  constructor(price, name, quantity) {
    this.price = price;
    this.name = name;
    this.quantity = quantity;
  }

  static compare(firstProduct, secondProduct) {
    let priceDifference = firstProduct.price - secondProduct.price;
    let quantityDifference = firstProduct.quantity - secondProduct.quantity;

    priceDifference = Math.abs(priceDifference);
    quantityDifference = Math.abs(quantityDifference);

    return `price difference ${priceDifference}, quantity difference ${quantityDifference}`;
  }

  static total(arr) {
    return arr.reduce((acc, el) => acc + el.price, 0);
  }
}

const apple = new Product(1000, 'apple', 5);
const pineapple = new Product(800, 'pineapple', 3);
const pear = new Product(900, 'pear', 4);
const melon = new Product(600, 'melon', 1);
const watermelon = new Product(700, 'watermelon', 2);

const arrOfProducts = [apple, pineapple, pear, melon, watermelon];

console.log(Product.compare(apple, pineapple));
console.log(Product.compare(melon, watermelon));
console.log(Product.total(arrOfProducts));