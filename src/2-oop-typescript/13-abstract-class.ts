// class ini tidak bisa di inisialisasi object nya

abstract class Hewan13 {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }

  makan(): void {
    console.log(`${this.nama} sedang makan`);
  }

  // method ini belum jelas nanti wajib di define di class yang di extends nya
  abstract bergerak(): void;
}


class Kucing13 extends Hewan13 {
  constructor(){
    super('kucing');
  }

  bergerak(): void {
    console.log('kucing berlari');
  }
}

class Burung13 extends Hewan13 {
  constructor(){
    super('burung');
  }

  bergerak(): void {
    console.log('burung terbang!');
  }
}

const kucing13 = new Kucing13();
kucing13.bergerak();