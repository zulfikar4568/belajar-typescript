/**********************************************Class Dasar*************************************************************************************** */

// export class User {
  //   // constructor(name: string){                                   // Menggunakan public (access modifier) di luar constructor
  //   //   this.name = name;
  //   // }
  //   // public name: string;
  //   constructor(public name: string, public age: number = 0){        //Menggunakan public (access modifier) di dalam constructor
  //   };
  // }
  
// let user = new User("Abah", 25);
// console.log(user);

/**********************************************Inheritance*************************************************************************************** */
// Digunakan jika kita akan membuat class dengan class yang sudah ada, dan properti dan method nya di warisi oleh class yang sudah ada atau parent
export class User {
  name: string;
  
  constructor(name: string, public age: number){
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string =>{
    return this.name;
  }
}

//public = bisa di akses di semua class / dari luar class
//protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
//private = hanya bisa di akses dari class itu sendiri

// Contoh kasus User Admin Member
// User
//   Admin = bisa edit add hapus membaca
//   Member = membaca

// class Admin extends User {
//   read: boolean = true;
//   write: boolean = true;

//   getRole(): { read: boolean, write: boolean }{
//     return {
//       read: this.read,
//       write: this.write
//     };
//   };
// }

// let admin = new Admin('Abah', 98);
// admin.getName();
// console.log(admin.getRole());
// admin.setName("Zul");
// console.log(admin.getName());

/**********************************************Super Constructor*************************************************************************************** */
// digunakan jika kita ingin menambahkan attribute baru ke dalam constructor
// class Admin extends User {
//   read: boolean = true;
//   write: boolean = true;
//   phone: string;

//   constructor(phone: string, name: string, age: number){
//     super(name, age);
//     this.phone = phone;
//   }

//   getRole(): { read: boolean, write: boolean }{
//     return {
//       read: this.read,
//       write: this.write
//     };
//   };
// }

// let admin = new Admin('0865232323', 'Abah', 98);
// admin.getName();
// console.log(admin.getRole());
// admin.setName("Zul");
// console.log(admin.getName());

/****************************************************************Setter dan Getter********************************************************************* */
// Biasanya digunakan untuk attribute atau properti private, dan kita bisa menambahkan validasi di dalamnya
// class Admin extends User {
//   read: boolean = true;
//   write: boolean = true;
//   phone: string;
//   private _email: string = "";

//   constructor(phone: string, name: string, age: number){
//     super(name, age);
//     this.phone = phone;
//   }

//   getRole(): { read: boolean, write: boolean }{
//     return {
//       read: this.read,
//       write: this.write
//     };
//   };

//   set email(value: string) {
//     if (value.length < 5){
//       this._email = "email salah!";
//     } else {
//       this._email = value;
//     }
//   }

//   get email(): string {
//     return this._email;
//   }
// }

// let admin = new Admin('0865232323', 'Abah', 98);
// admin.getName();
// console.log(admin.getRole());
// admin.setName("Zul");
// console.log(admin.getName());
// // admin._email;
// admin.email = 'admin@gmail.com';
// console.log(admin.email);

/****************************************************************Properti dan Static Method********************************************************************* */
// Properti atau method yang dapat langsung di akses dari kelas itu sendiri tanpa perlu di instansiasi terlebih dahulu

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static getroleName: string = "Admin";

  static getSapa(): string{
    return "Hai!!!";
  }

  constructor(phone: string, name: string, age: number){
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean, write: boolean }{
    return {
      read: this.read,
      write: this.write
    };
  };

  set email(value: string) {
    if (value.length < 5){
      this._email = "email salah!";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

console.log(Admin.getroleName);
console.log(Admin.getSapa());

/****************************************************************Abstract Class********************************************************************* */
// Class yang tidak bisa di instansiasi, harus di extend dulu agar bisa di instansiasi

abstract class Kendaraan {
  abstract wheels: number;
  
  start(): void {
    console.log("brum brumm!!!");
  }
}

class Mobil extends Kendaraan {
  wheels: number = 4;
}

class Motor extends Kendaraan {
  start(): void { //Overrides method
    console.log("Breng breng!!");
  }
  wheels: number = 2;
}

let car = new Mobil();
car.start();
console.log(car.wheels);

let bike = new Motor();
bike.start();
console.log(bike.wheels);