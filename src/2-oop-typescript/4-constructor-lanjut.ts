class Hewan4 {
  nama: string;
  kaki: number;

  constructor(nama: string, kaki: number) {
    this.nama = nama;
    this.kaki = kaki;
  }
}

const serigala = new Hewan4('Jax', 4);
console.log(serigala);

class Hewan41 {
  constructor(public nama: string, public kaki: number) {}
}

const ayam = new Hewan4('Jax41', 3);
console.log(ayam);