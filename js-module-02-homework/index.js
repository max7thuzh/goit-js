"use strict";

const numbers = [];
let input;
let total = 0;

do {
  input = prompt("Введите число");

  if (input === null) {
    break;
  }

  numbers.push(Number(input));
} while (input !== null);

for (let element of numbers) {
  total = total + element;
}

alert(`Сумма елементов массива = ${total}`);
