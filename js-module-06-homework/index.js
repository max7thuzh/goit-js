"use strict";

class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._topping = [];
  }

  static get SIZE_SMALL() {
    return "SIZE_SMALL";
  }

  static get SIZE_LARGE() {
    return "SIZE_LARGE";
  }

  static get SIZES() {
    return {
      [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50
      },
      [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100
      }
    };
  }

  static get STUFFING_CHEESE() {
    return "STUFFING_CHEESE";
  }

  static get STUFFING_SALAD() {
    return "STUFFING_SALAD";
  }

  static get STUFFING_MEAT() {
    return "STUFFING_MEAT";
  }

  static get STUFFINGS() {
    return {
      [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20
      },
      [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5
      },
      [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15
      }
    };
  }

  static get TOPPING_SPICE() {
    return "TOPPING_SPICE";
  }

  static get TOPPING_SAUCE() {
    return "TOPPING_SAUCE";
  }

  static get TOPPINGS() {
    return {
      [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0
      },
      [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5
      }
    };
  }

  get size() {
    return this.getSize();
  }

  get stuffing() {
    return this.getStuffing();
  }

  get toppings() {
    return this.getToppings();
  }

  get price() {
    return this.calculatePrice();
  }

  get calories() {
    return this.calculateCalories();
  }

  getSize() {
    return this._size;
  }

  getStuffing() {
    return this._stuffing;
  }

  getToppings() {
    return this._topping;
  }

  addTopping(topping) {
    if (!this._topping.includes(topping)) {
      this._topping.push(topping);
    } else {
      console.log(` Такая добавка уже есть! `);
    }
  }

  removeTopping(topping) {
    if (this._topping.includes(topping)) {
      const idx = this._topping.indexOf(topping);
      this._topping.splice(idx, 1);
    } else {
      console.log(` Такой добавки не существует! `);
    }
  }

  calculatePrice() {
    const toppingsPrice = this._topping.reduce(
      (acc, element) => acc + Hamburger.TOPPINGS[element].price,
      0
    );
    return (
      Hamburger.SIZES[this._size].price +
      Hamburger.STUFFINGS[this._stuffing].price +
      toppingsPrice
    );
  }

  calculateCalories() {
    const toppingsCalories = this._topping.reduce(
      (acc, element) => acc + Hamburger.TOPPINGS[element].calories,
      0
    );
    return (
      Hamburger.SIZES[this._size].calories +
      Hamburger.STUFFINGS[this._stuffing].calories +
      toppingsCalories
    );
  }
}

/////////////////////////////////////////////////
// OBJECT CREATE
/////////////////////////////////////////////////

const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_CHEESE
);

hamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log("Calories: ", hamburger.calories);
console.log("Price: ", hamburger.price);

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log("Price with sauce: ", hamburger.price);

console.log("Is hamburger large: ", hamburger.size === Hamburger.SIZE_LARGE);

hamburger.removeTopping(Hamburger.TOPPING_SPICE);

console.log("Hamburger has %d toppings", hamburger.toppings.length);
