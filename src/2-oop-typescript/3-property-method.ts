export class Hewan3 {
  //property
  nama: string = "";
  kaki: string = "";
  mamalia: boolean = false;

  //method
  bernafas(){
    console.log(`${this.nama} sedang bernafas`);
  }
}

// CONTOH
// const hewan3 = new Hewan3;
// console.log(hewan3);

// hewan3.nama = 'Gugug';
// hewan3.kaki = '4';
// console.log(hewan3);

// hewan3.bernafas();