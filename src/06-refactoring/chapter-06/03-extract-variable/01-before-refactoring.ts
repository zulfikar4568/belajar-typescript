namespace Chapter06BeforeRefactoring {
  // With function
  function price(order) {
    return order.quantity * order.itemPrice - 
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100);
  }

  class Order {
    private _data;
    constructor(record) {
      this._data = record;
    }

    get quantity() {
      return this._data.quantity;
    }

    get itemPrice() {
      return this._data.itemPrice;
    }

    get price() {
      return this.quantity * this.itemPrice - 
        Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
        Math.min(this.quantity * this.itemPrice * 0.1, 100);
    }
  }
}