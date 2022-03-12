//Di pakai untuk mendapatkan value dan set value

class Product {
  private _price: number = 0;
  private discount: number = 0.05;

  //getter
  get price() {
    return this._price;
  }

  //setter
  set price(value: number) {
    this._price = value - (value * this.discount);
  }
}

const baju = new Product();
baju.price = 8000; //panggil setter
console.log(baju.price); //panggil getter