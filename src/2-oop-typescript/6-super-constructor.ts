export class Hewan6 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}


export class Kuda extends Hewan6 {
  tinggi: number;

  constructor(tinggi: number, nama: string, kaki: number) {
    super(nama, kaki);
    this.tinggi = tinggi;
  }
}

// CONTOH - Di sini jika kita meng extend class yang mempunyai parameter constructor maka kita harus memanggilnya dengan super
// const kuda = new Kuda(198, 'jax', 4);
// console.log(kuda);