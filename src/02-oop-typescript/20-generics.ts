// Menjadikan function, class, interface menjadikan tipe data yang dinamis

function getData(value: any) {
  return value;
}


const data1 = getData('test');
// Dengan any kita tidak dapat mengestrak method dari tipe data tersebut misal pada string, toString(), toLowerCase dsb.
console.log(data1);

// ------------------------------------------------------------------

//Menggunakan Generic
function getData2<T>(value: T) {
  return value;
}


const data2 = getData2<string>("test");
// Kita bisa ekstrak method string karena kita define type datanya
console.log(data2.length);

const data3 = getData2<number>(123);
console.log(data3.toFixed());