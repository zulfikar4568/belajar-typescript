//public = propert & method bisa di panggil dari mana saja
//protected = propert & method hanya bisa di panggil oleh class itu sendiri dan turunannya
//private = propert & method hanya bisa di panggil oleh class itu sendiri

class Hewan8 {
  public nama: string;
  private kaki: number;
  protected mamalia: boolean;

  constructor(nama: string, kaki: number, mamalia: boolean) {
    this.nama = nama;
    this.kaki = kaki;
    this.mamalia = mamalia
  }

  berjalan() {
    
  }
}


class Katak8 extends Hewan8 {
  private umurTelur: number = 4;
  private umurKecebong: number = 7;
  private umurKatak: number = 90;

  getUmur() {
    // this. katak tidak bisa di akses
    console.log(`${this.nama} mempunyai total ${this.umurTelur + this.umurKecebong + this.umurKatak} dan mamalia ${this.mamalia}`);
  }
}

const katak8 = new Katak8('Brath', 4, false);
katak8.getUmur();