// class abstract tidak bisa di inisialisasi object nya

export abstract class Hewan13 {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }

  makan(): void {
    console.log(`${this.nama} sedang makan`);
  }

  // method ini belum jelas nanti wajib (kalau tidak error) di define di class yang meng extends nya
  abstract bergerak(): void;
}


export class Kucing13 extends Hewan13 {
  constructor(){
    super('kucing');
  }

  bergerak(): void {
    console.log('kucing berlari');
  }
}

export class Burung13 extends Hewan13 {
  constructor(){
    super('burung');
  }

  bergerak(): void {
    console.log('burung terbang!');
  }
}

// const kucing13 = new Kucing13();
// kucing13.bergerak();