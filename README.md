<p align="center">
 <img width="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" align="center" alt="Typescript Tutorial" />
 <h1 align="center"><b>Typescript Tutorial</b></h1>
</p>

# Install Typescript
```bash
npm --version

npm install typescript nodemon -D
#atau
sudo npm install -g typescript

tsc --version

```

# Menjalankan Typescript script
Buka terminal 1
```bash
npm run tsc
```
Buka terminal 2
```bash
npm run dev-1
#s/d
npm run dev-9
```

___
___
___

</br>

# 1. Type Data Dasar

Tipe data pada typescript menganut konsep `strong types`, maksudnya ketika contoh variable sudah di inisialisasi `string` maka tidak akan bisa di inisialisasi lagi dengan tipe data lain:
### Tipe `string`
```typescript
let nama: string = "Zulfikar";
//nama = true; akan error karna di ubah menjadi boolean
nama = "true";
```
## **Contoh lain**:
### Tipe `number`
```
let umur: number = 23;
umur = 57;
```
### Tipe `boolean`
```typescript
let isMarried: boolean = false;
isMarried = true;
isMarried = false;
```
### Tipe `any`
tipe data ini merupakan tipe data yang dinamis, sehingga kita bisa mengubah tipe data menjadi tipe lain.
```typescript
let apaAja: any = "Zulfikar";
apaAja = 20;
apaAja = [20, "23", true]
apaAja = {}
apaAja = true || false || "string"
```

# 2. Array pada Typescript
Array juga menganut konsep `strong types`, ketika array sudah di inisialisasi sebagai `string` atau `number` maka isi array nya tidak boleh berubah.
## **Contoh**:
### Tipe data `Array`
```typescript
let array = [1, 2, 3];
array = [1, 2, 3, 4];
```
```typescript
let array2: string[];
array2 = ["1", "2", "3"];
```
```typescript
let array3: any[];
array3 = [1, "2", true];
```

### Tipe data `Array Tuples`
Tuples Array merupakan tipe data array yang isinya bisa berbagai macam tipe data, tetapi nilai item nya terbatas. Contoh di bawah ini hanya bisa di isi dengan tipe data `string` dan `number`
```typescript
let biodata: [string, number];
biodata = ["surabaya", 123];
```

# 3. Tipe data Enum (*Enumeration*)
Tipe data ini sebuah tipe data yang menyimpan kumpulan tipe data konstan.
### Tipe data `Numeric Enums`
```typescript
enum Month {
  JAN,
  FEB,
  MAR,
  APR,
  MAY
}
console.log(Month);
/*
maka akan muncul output
{ '0': 'JAN',
  '1': 'FEB',
  '2': 'MAR',
  '3': 'APR',
  '4': 'MAY',
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4 }*/

enum Month2 {
  JAN = 10,
  FEB,
  MAR = 90,
  APR,
  MAY
}
console.log(Month2);

/*Maka akan muncul output
{ '10': 'JAN',
  '11': 'FEB',
  '90': 'MAR',
  '91': 'APR',
  '92': 'MAY',
  JAN: 10,
  FEB: 11,
  MAR: 90,
  APR: 91,
  MAY: 92 }*/
```

### Tipe data `String Enums`
```typescript
enum MonthString {
  JAN = "Januari",
  FEB = "Februari",
  MAR = "Maret",
  APR = "April",
  MAY = "Mei"
}
/*
Maka akan muncul output
{ JAN: 'Januari',
  FEB: 'Februari',
  MAR: 'Maret',
  APR: 'April',
  MAY: 'Mei' }

console.log(MonthString);
*/
```

# 4. Function pada Typescript
## fungsi tanpa balikan
```typescript
function printName(): void {
  console.log("print nama");
  // return "a"; akan error
}
printName();
```

## fungsi balikan `Function Return`
```typescript
function getName(): string {
  return "Hello my name is Zulfikar";
}
console.log(getName());
```

## Fungsi Parameter (`Parameter Function`)
Kita bisa memasukan sebuah nilai ke dalam fungsi
```typescript
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}
// console.log(multiply(2,"4")); ini akan error karena terdapat string
console.log(multiply(2,4));
```

## Fungsi sebagai tipe (`Function as Type`)

```typescript
type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
}
console.log(Add(2,4));
```

## Fungsi Parameter Bawaan (`Default Parameter Function `)
Kita tidak diwajibkan untuk memasukan parameter ke `last` karena sudah terdapat default
```typescript
const fullName = (first: string, last: string = "Abah"): string => {
  return first + " " + last;
}
console.log(fullName("Zulfikar"));
```

## Fungsi Parameter Opsional (`Optional Parameter Function`)
```typescript
const optAges= (val1: number, val2?: number): number => {
  return val1 + val2;
} //Function ini harus di return number

const optAges= (val1: number, val2?: number): string => {
  return val1 + " "+ val2;
} //Function ini bisa di return string meskipun parameter nya number

const getAlamat = (val1: string, val2?: string): string => {
  return val1 + " " + val2;
}
console.log(getAlamat("A", "B")); // A B
console.log(getAlamat("A")); //A undefined
```
# 5. Object pada Typescript
## Cara Biasa
```typescript
let user = {
  name: "zulfikar",
  age: 20
};

user = {
  name: "zul",
  age: 12
};
```

## Cara Bagus
```typescript
type User = {
  name: string,
  age: number
};

let user: User = {
  name: "zulfikar",
  age: 20
};

user = {
  name: "zul",
  age: 12
};
```

# 6 OOP (`Object Oriented Programming`) pada Typescript

## Membuat Class dasar dan inisialisasinya
```typescript
export class User {
  // Menggunakan public (access modifier) di luar constructor
  constructor(name: string){
    this.name = name;
  }
  public name: string;
  };
}
// Atau (Pilih di antara yang atas atau yang bawah)
export class User {
  //Menggunakan public (access modifier) di dalam constructor
  constructor(public name: string, public age: number = 0){
  };
}
  
let user = new User("Abah", 25);
console.log(user);
```

## Inheritance
Digunakan jika kita akan membuat class dengan class yang sudah ada, dan properti dan method nya di warisi oleh class yang sudah ada atau `parent`

- public = bisa di akses di semua class / dari luar class
- protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
- private = hanya bisa di akses dari class itu sendiri

Contoh kasus User, Admin, Member:</br>
- User</br>
  - Admin = bisa edit add hapus membaca</br>
  - Member = membaca</br>

```typescript
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

class Admin extends User {
  read: boolean = true;
  write: boolean = true;

  getRole(): { read: boolean, write: boolean }{
    return {
      read: this.read,
      write: this.write
    };
  };
}

let admin = new Admin('Abah', 98);
admin.getName();
console.log(admin.getRole());
admin.setName("Zul");
console.log(admin.getName());
```

## Super Constructor
Digunakan jika kita ingin menambahkan attribute baru ke dalam constructor
```typescript
class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;

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
}

let admin = new Admin('0865232323', 'Abah', 98);
admin.getName();
console.log(admin.getRole());
admin.setName("Zul");
console.log(admin.getName());
```

## Setter dan Getter
Biasanya digunakan untuk attribute atau properti private, dan kita bisa menambahkan validasi di dalamnya

```typescript
class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";

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

let admin = new Admin('0865232323', 'Abah', 98);
admin.getName();
console.log(admin.getRole());
admin.setName("Zul");
console.log(admin.getName());
// admin._email; // akan error karena attribut ini private
admin.email = 'admin@gmail.com';
console.log(admin.email);
```

## Properti dan Method Static
Properti atau method yang dapat langsung di akses dari kelas itu sendiri tanpa perlu di instansiasi terlebih dahulu

```typescript
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
```

## Abstract Class
Class yang tidak bisa di instansiasi, harus di extend dulu agar bisa di instansiasi

``` typescript
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
```

## 7. Interface pada Typescript
Di gunakan sebagai template atau Blueprint biasanya
``` typescript
interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean){
    this.name = name;
    this.isGaming = isGaming;
  }
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

class Mackbook implements Laptop {
  name: string;
  keyboardLight: boolean;

  constructor(name: string, keyboardLight: boolean){
    this.name = name;
    this.keyboardLight = keyboardLight;
  }

  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

let asus = new Asus("Rog", true);
asus.on();
asus.off();
console.log(asus);
```

## 8. Tipe data Generic
Masalah pertama, pada bagian `getData(123).length` tidak error, namun seharusnya tidak di perbolehkan.
```typescript
function getData(value: any) {
  return value;
}
console.log(getData("Zul").length);
console.log(getData(123).length); //tidak error
```
Untuk solusinya kita bisa gunakan tipe data generic (**Sebuah tipe data yang dinamis**).
```typescript
// Pada Function Biasa
function myData<T>(value: T) {
  return value;
}
console.log(myData("Zul").length);
// console.log(myData(123).length); //pasti error

//Pada Arrow Function
const myData2 = <T>(value: T) => {
  return value;
}
```

## 9. Class Generic
Class ini merupakan class yang dinamis, kita bisa assign tipe data apa saja ke dalam class tersebut.

```typescript
class List<T> {
  private data: T[];
  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[]{
    return this.data;
  }
}
let numbers = new List<number>(1,2,3,4);
numbers.add(1234);
numbers.addMultiple(8,9,0);
console.log(numbers.getAll());

let random = new List<number | string>("a", 2, 3);
random.add("abs");
console.log(random.getAll());
```

### © M. Zulfikar Isnaen, License [MIT](LICENSE)