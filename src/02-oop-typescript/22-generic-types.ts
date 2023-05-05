//Cenderung digunakan pada Variable biasa
type Generic2<T> = T;

function genericsFunction2<T>(value: T): Generic2<T> {
  return value;
}


console.log(genericsFunction2<string>("Testtttt"));
console.log(genericsFunction2<number>(1234));