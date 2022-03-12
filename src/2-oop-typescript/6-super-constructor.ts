class Hewan6 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}


class Kuda extends Hewan6 {
  tinggi: number;

  constructor(tinggi: number, nama: string, kaki: number) {
    super(nama, kaki);
    this.tinggi = tinggi;
  }
}

const kuda = new Kuda(198, 'jax', 4);
console.log(kuda);