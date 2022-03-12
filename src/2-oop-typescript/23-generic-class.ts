interface Generic3<T, T2> {
  propA: T,
  methodA(): T
  propB: T2,
  methodB(): T2
}

class GenericClass<T, T2> implements Generic3<T, T2> {
  propA: T;
  propB: T2;

  constructor(prop: T, prop2: T2) {
    this.propA = prop;
    this.propB = prop2;
  }

  methodA(): T {
    return this.propA;
  }

  methodB(): T2 {
    return this.propB;
  }
}


const genericClassA = new GenericClass<number, string>(123, "huruf");
console.log(genericClassA.methodA());
console.log(genericClassA.methodB());