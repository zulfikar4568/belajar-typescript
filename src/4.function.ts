// tipe data pada balikan function

// function getName() {
//   return "Hello my name is Zulfikar";
// }


// function getName(): string {
  //   return 1244;
  // }
  
function getName(): string {
  return "Hello my name is Zulfikar";
}
console.log(getName());

function getAge(): number {
  return 23;
}
console.log(getAge());

function printName(): void {
  console.log("print nama");
  // return "a";
}
printName();


/********************* Argument Function ************************************/

function multiply(val1: number, val2: number): number {
  return val1 * val2;
}
// console.log(multiply(2,"4"));
console.log(multiply(2,4));

/*************************** Function as Type ****************************************/

// let age: number = 20;
type Age = number;
let age: Age = 123;

type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
}
console.log(Add(2,4));

/************************ Default Parameter *******************************/

const fullName = (first: string, last: string = "Abah"): string => {
  return first + " " + last;
}
console.log(fullName("Zulfikar"));

/************************ Optional Parameter *******************************/
// const optAges= (val1: number, val2?: number): number => {
//   return val1 + val2;
// }

// const optAges= (val1: number, val2?: number): string => {
//   return val1 + " "+ val2;
// }
const getAlamat = (val1: string, val2?: string): string => {
  return val1 + " " + val2;
}
console.log(getAlamat("A", "B"));
console.log(getAlamat("A"));