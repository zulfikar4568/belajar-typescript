class TokoA {
  private nama: string = 'Toko A';
  private keuntungan: number = 1000;

  getNama(): string {
    return this.nama;
  }

  getKeuntungan(): number {
    return this.keuntungan;
  }
}

export class ProdukFashion {
  private toko: TokoA;
  private nama: string;
  private harga: number;

  constructor(nama: string, harga: number) {
    this.nama = nama;
    this.harga = harga;

    //Injection ini static, class Produk Fashion ini akan bergantung pada toko A, jika banyak produk yang sudah ketergantungan dengan toko A misal ribuan, dan produk tersebut akan ganti toko, maka kita harus ganti 1 per 1 dan itu akan repot
    this.toko = new TokoA();
  }

  jual(): void {
    console.log(`${this.nama} harga jual nya adalah ${this.toko.getKeuntungan() + this.harga}`);
  }
}


// const kaos = new ProdukFashion('baju panjang', 50000);
// kaos.jual();

// ############################################################################################################

interface TokoInterface {
  nama: string;
  keuntungan: number;
  getKeuntungan(): number;
}

export class TokoLama implements TokoInterface{
  nama: string = 'Toko Lama';
  keuntungan: number = 9000;

  getNama(): string {
    return this.nama;
  }

  getKeuntungan(): number {
    return this.keuntungan;
  }
}

export class TokoBaru implements TokoInterface{
  nama: string = 'Toko Baru';
  keuntungan: number = 2500;

  getNama(): string {
    return this.nama;
  }

  getKeuntungan(): number {
    return this.keuntungan;
  }
}

export class ProdukSepatu {
  private toko: TokoInterface;
  private nama: string;
  private harga: number;

  constructor(toko: TokoInterface, nama: string, harga: number) {
    this.nama = nama;
    this.harga = harga;

    //Dependency Injection
    this.toko = toko;
  }

  jual(): void {
    console.log(`${this.nama} harga jual nya adalah ${this.toko.getKeuntungan() + this.harga}`);
  }
}

export class ProdukSandal {
  private toko: TokoInterface;
  private nama: string;
  private harga: number;

  constructor(toko: TokoInterface, nama: string, harga: number) {
    this.nama = nama;
    this.harga = harga;
    
    //Dependency Injection
    this.toko = toko;
  }

  jual(): void {
    console.log(`${this.nama} harga jual nya adalah ${this.toko.getKeuntungan() + this.harga}`);
  }
}


// const tokoLama = new TokoLama();
// const tokoBaru = new TokoBaru();

// const sepatuMahal = new ProdukSepatu(tokoLama, 'baju mahal', 80000);
// const sepatuMahal2 = new ProdukSepatu(tokoBaru, 'baju mahal', 80000);

// console.log(sepatuMahal.jual());
// console.log(sepatuMahal2.jual());