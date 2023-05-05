interface Produk {
  jual(): void;
}

export class ProdukMobil implements Produk {
  jual(): void {
    console.log('jual mobil');
  }
}


export class ProdukMotor implements Produk {
  jual(): void {
    console.log('jual motor');
  }
}


function jualProduk<T extends Produk>(product: T[]): void {
  product.forEach(product => product.jual());
}


const mobil = new ProdukMobil();
const motor = new ProdukMotor();

jualProduk([mobil, motor])