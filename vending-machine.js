//vending-machine.js
module.exports = class VM {
  constructor() {
    this.amount = 0;
    this.drinks = [
      { name: "래쓰비", price: 400 },
      { name: "포카리", price: 700 },
      { name: "코카콜라", price: 1400 },
      { name: "토레타", price: 1800 },
      { name: "사이다", price: 1200 }
    ];
  }
  getAvailableDrinks() {
    const availableDrinks = this.drinks
      .filter(drink => this.amount >= drink.price)
      .map(drink => drink.name);
    return availableDrinks;
  }
  getCurrentStatus() {
    return `현재 금액: ${
      this.amount
    }원\n선택 가능한 음료: ${this.getAvailableDrinks()}`;
  }
  insert(money) {
    if (typeof money !== "number") return "error> 잘못된 입력입니다.";
    this.amount += money;
    return `${this.getCurrentStatus()}`;
  }
  getDrink(drink) {
    const matchedDrink = this.drinks.filter(d => d.name === drink)[0];
    const price = matchedDrink.price;
    if (price > this.amount) return "잔액이 부족합니다.";
    this.amount -= price;
    if (this.getAvailableDrinks().length === 0) {
      const returnedMoney = this.amount;
      this.amount = 0;
      return `${drink}\n${returnedMoney}원을 반환합니다.\n${this.getCurrentStatus()}`;
    }
    return `${drink}\n${this.getCurrentStatus()}`;
  }
};
