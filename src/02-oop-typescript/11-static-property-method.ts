/* Jika kita implementasi property dengan static maka property ini akan berlaku untuk global */
// Static property dan method bisa di panggil tanpa kita harus menginisialisasi object nya
export class Ayam {
  static kaki: number = 2;

  static jalan() {
    console.log(`ayam berjalan dengan ${this.kaki} kaki`);
  }

  getKaki() {
    // console.log(this.kaki) // tidak bisa seperti ini
    console.log(Ayam.kaki);
  }
}

// CONTOH

// console.log(Ayam.kaki)
// Ayam.kaki = 4
// console.log(Ayam.kaki)
// Ayam.jalan()

// Ayam.jalan(); // bisa di panggil tanpa inisialisasi object nya

// const ayam2 = new Ayam();
// ayam2.getKaki();

// const ayam3 = new Ayam();
// const ayam5 = new Ayam();
// const ayam6 = new Ayam();
// const ayam7 = new Ayam();

// Ayam.kaki = 4; // Ini merubah property kaki secara global

// ayam3.getKaki();
// ayam5.getKaki();
// ayam6.getKaki();
// ayam7.getKaki();