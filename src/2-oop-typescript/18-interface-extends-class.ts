// Interface bisa extends class, jadi bukan hanya class yang bisa extend interface

class Hewan18 {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }
}


interface HiuInterface extends Hewan18 {
  swim(): void;
}

class Hiu implements HiuInterface {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }

  swim(): void {
    console.log('berenang');
  }

}