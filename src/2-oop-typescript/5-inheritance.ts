export class Hewan5 {
  nama: string = "";
  kaki: number = 0;

  bernafas() {
    console.log('bernafas!!!');
  }
}

export class Gajah extends Hewan5 {
  warna: string = 'hitam';
}

// const akib = new Gajah()
// akib.warna = 'hijau'
// akib.bernafas()

// const ucok = new Hewan5()
// Ini tidak bisa karena sebagai parent tidak punya warna
// ucok.warna = 'red'
// console.log(ucok)