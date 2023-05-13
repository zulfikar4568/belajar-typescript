namespace Chapter06AfterRefactoring {
  function price(order) {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

    return basePrice - quantityDiscount + shipping;
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

    get basePrice() {
      return this.quantity * this.itemPrice;
    }

    get quantityDiscount() {
      return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
    }

    get shipping() {
      return Math.min(this.quantity * this.itemPrice * 0.1, 100);
    }

    get price() {
      return  this.basePrice - this.quantityDiscount + this.shipping;
    }
  }
}