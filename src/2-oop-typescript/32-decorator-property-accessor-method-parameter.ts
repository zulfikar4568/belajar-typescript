function Log(target: any, propertyName: string | Symbol) {
  console.log("PROPERTY DECORATOR")
  console.log(target, propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("ACCESSOR DECORATOR")
  console.log(target) 
  console.log(name) 
  console.log(descriptor) 
}

function Log3(target: any, propertyKey: string | Symbol, descriptor: PropertyDescriptor) {
  console.log("METHOD DECORATOR")
  console.log(target) 
  console.log(propertyKey) 
  console.log(descriptor) 
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("PARAMETER DECORATOR")
  console.log(target) 
  console.log(name) 
  console.log(position) 
}

class Product {
  @Log // PROPERTY
  title: string;
  private _price: number;

  @Log2 // ACCESSOR
  set price(val: number) {
    if (val > 0) {
       this._price = val
    } else {
      throw new Error('price cannot negative value')
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3 // METHOD
  getPriceWithTax(@Log4 tax: number) { // PARAMETER
    return this._price * (1 + tax)
  }
}

const p = new Product('minuman', 123)