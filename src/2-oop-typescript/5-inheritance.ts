class Hewan5 {
  nama: string = "";
  kaki: number = 0;

  bernafas() {
    console.log('bernafas!!!');
  }
}

class Gajah extends Hewan5 {
  warna: string = 'hitam';
}

const gajah4 = new Gajah();
gajah4.nama = "ABI";
gajah4.kaki = 4;
console.log(gajah4);