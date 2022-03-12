// 1. Masalah pertama
function getData(value: any) {
  return value;
}
console.log(getData("Zul").length);
console.log(getData(123).length); //tidak error


/******************************Generic Type********************************/
//Sebuah tipe data yang dinamis

///generic
function myData<T>(value: T) {
  return value;
}
console.log(myData("Zul").length);
// console.log(myData(123).length); //pasti error

const myData2 = <T>(value: T) => {
  return value;
}
console.log(myData2("Zul").length);