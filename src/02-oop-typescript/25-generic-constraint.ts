// Ringkasan
// Gunakan `extends` untuk constrain type parameter ke type spesifik
// Gunakan `extends keyof` untuk constrain type yang merupakan property object lain

// #################################################################################################

// function generic24<T>(arg: T): T {
//   console.log(arg.length); // Kita ingin gunakan length di sini gimana caranya?
//   return arg;
// }

interface Length {
  length: number;
}


export function generic24<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// const testing = generic24('qwerty');
// console.log(testing);

// const testingNumber = generic24(12321); //Pasti akan error karena number tidak mempunyai method length
// const testingNumber = generic24({length: 10, value: 200}); // length harus di define manual

// #################################################################################################
interface IIdentitas {
  nama: string,
  umur: number
}

interface IAlamat {
  alamat: string
}

export function genericCoba<T extends IIdentitas, T2 extends IAlamat>(object1: T, object2: T2): any {
  return {
    ...object1,
    ...object2
  }
}

// const test = genericCoba({ nama: 'zulfikar', umur: 24 }, { alamat: 'bandung' })
// console.log(test)