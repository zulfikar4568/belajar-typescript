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

# Tipe data Enum (*Enumeration*)
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