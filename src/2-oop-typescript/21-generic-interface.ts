// Cenderung digunakan pada object
interface Generic<T> {
  propA: T
}

function genericsFunction<T>(value: T): Generic<T> {
  let data: Generic<T> = {
    propA: value
  }
  return data;
}


console.log(genericsFunction<string>("Testtttt"));
console.log(genericsFunction<number>(1234));