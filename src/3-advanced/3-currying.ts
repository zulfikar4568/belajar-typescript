function sum(a: number, b: number, c: number) {
  return a + b + c;
}

console.log(sum(1,2,3))

function currying(fn: Function) {
  return function(a: number) {
    return function(b: number) {
      return function(c: number) {
        return fn(a, b, c);
      }
    }
  }
}

const func = currying(sum)

console.log(func(12)(1)(3))
const arg1 = func(12)
const arg2 = arg1(1)
const arg3 = arg2(3)

console.log(arg3);