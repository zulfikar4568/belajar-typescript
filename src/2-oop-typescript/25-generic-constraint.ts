// function generic24<T>(arg: T): T {
//   console.log(arg.length); // Kita ingin gunakan length di sini gimana caranya?
//   return arg;
// }

interface Length {
  length: number;
}


function generic24<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const testing = generic24('qwerty');
console.log(testing);

// const testingNumber = generic24(12321); //Pasti akan error karena number tidak mempunyai method length
const testingNumber = generic24({length: 10, value: 200}); // length harus di define manual