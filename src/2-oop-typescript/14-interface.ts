//Interface adalah sebuah perjanjian atau Kontrak dimana semua property atau method yang sudah disepakati di dalam class itu harus diimplementasi kepada class yang menggunakan interface tersebut

interface AndroidPhone {
  nama: string;
  menu(): void;
  home(): void;
  back(): void;
}


class Samsung implements AndroidPhone {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }

  menu(): void {
    console.log('menu tapped')
  }
  home(): void {
    console.log('menu home');
  }
  back(): void {
    console.log('menu home');
  }
}


class Vivo implements AndroidPhone {
  nama: string;

  constructor(nama: string) {
    this.nama = nama;
  }

  menu(): void {
    console.log('menu tapped')
  }
  home(): void {
    console.log('menu home');
  }
  back(): void {
    console.log('menu home');
  }
}

class GameA {
  private phone: AndroidPhone;

  constructor(phone: AndroidPhone){
    this.phone = phone;
  }

  back() {
    console.log('Kembali ke menu utama di game');
  }

  menu() {
    this.phone.menu();
  }

  home() {
    this.phone.home();
  }
}


const samsung = new Samsung('J10');
const gameA = new GameA(samsung);
gameA.home();
gameA.back();
gameA.menu();
// ----------------- iPhone

interface ApplePhone {
  home(): void;
}


class iPhone implements ApplePhone {
  nama: string;

  constructor(nama: string){
    this.nama = nama;
  }

  home(): void {
    console.log('muncul global');
  }
}

const iphoneA = new iPhone('Iphone13');
// const gameB = new GameA(iphoneA); // Akan error, karna game ini hanya bisa di gunakan pada android