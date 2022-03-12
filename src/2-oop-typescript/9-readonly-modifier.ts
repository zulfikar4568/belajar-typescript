//imutable agar suatu property tidak bisa di ubah
//const hanya bisa di pake pada variable biasa, readonly di pakai pada property pada class

class Person {
  readonly gender: string = 'Pria';
}


const arif = new Person();
// arif.gender = "wanita"; //tidak bisa dilakukan karna gender hanya bisa di read saja
console.log(arif.gender);
