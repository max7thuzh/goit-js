"use strict";

// =======================================
// OBJECTS DESCRIBE
// =======================================

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

// =======================================
// CONSRUCTOR CASHIER
// =======================================

const Cashier = function (
  name,
  productsDatabase,
  totalPrice = 0,
  customerMoney = 0,
  changeAmount = 0
) {
  this.name = name;
  this.productsDatabase = products;
  this.totalPrice = totalPrice;
  this.customerMoney = customerMoney;
  this.changeAmount = changeAmount;

  // =======================================
  // OBJECT METHODS
  // =======================================

  this.greet = function () {
    console.log(`Здравствуйте, вас обслуживает ${this.name}`);
  };

  this.onSuccess = function () {
    if (this.changeAmount > 0) {
      console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
    } else {
      console.log(`Спасибо за покупку!`);
    }
  };

  this.onError = function () {
    console.log(`Очень жаль, вам не хватает денег на покупки`);
  };

  this.countTotalPrice = function (order) {
    const orderElements = Object.entries(order);
    for (const orderElement of orderElements) {
      this.totalPrice =
        this.totalPrice + orderElement[1] * products[orderElement[0]];
    }
    return this.totalPrice;
  };

  this.getCustomerMoney = function (value) {
    this.customerMoney = value;
    return this.customerMoney;
  };

  this.countChange = function () {
    if (this.customerMoney >= this.totalPrice) {
      this.changeAmount = this.customerMoney - this.totalPrice;
      return this.changeAmount;
    } else {
      return null;
    }
  };

  this.reset = function () {
    this.totalPrice = 0;
    this.changeAmount = 0;
    this.customerMoney = 0;
  };
};

// =======================================
// RUN PROGRAM
// =======================================

const andrew = new Cashier("Андрей", products);

andrew.greet();
andrew.countTotalPrice(order);
andrew.getCustomerMoney(120);

const result = andrew.countChange();

if (result !== null) {
  andrew.onSuccess();
} else {
  andrew.onError();
}

andrew.reset();
