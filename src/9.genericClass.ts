//bisa pake <T> atau <Type> atau <U>
class List<T> {
  private data: T[];
  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[]{
    return this.data;
  }
}
let numbers = new List<number>(1,2,3,4);
numbers.add(1234);
numbers.addMultiple(8,9,0);
console.log(numbers.getAll());

let random = new List<number | string>("a", 2, 3);
random.add("abs");
console.log(random.getAll());