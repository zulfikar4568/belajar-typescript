// *************************************KEBINGUNGAN BEDAKAN ANTARA TYPE DAN INTERFACE
type UserType = {
  nama: string;
}


interface UserInterface {
  nama: string;
}

class User1 implements UserType {
  nama: string = "user 1";
}
class User2 implements UserInterface {
  nama: string = "user 2";
}


// *************************************Tipe Data
// Interface hanya bisa pake object, tidak bisa langsung variable
// interface ABCD = string; // pasti error
interface ABCD {
  nama: string;
}
// Type bisa langsung variable, maupun object
type DCBA = string;
type PKL = {
  nama: string
};


// ***************************************Merged (Intersection) di type dan interface
// Interface bisa di merged
interface Dinosaurus {
  nama: string
}

interface Dinosaurus {
  berat: number;
}

class Dino implements Dinosaurus {
  nama: string;
  berat: number;
  constructor(nama: string, berat: number) {
    this.nama = nama;
    this.berat = berat;
  }
}


// Type tidak bisa di merged secara langsung seperti ini
// type DinoType = {
//   nama: string;
// }

// type DinoType = {
//   nama: string;
// }


type Name = {
  nama: string;
}

type Umur = {
  umur: number;
}
// Cara nya harus seperti ini
type Karyawan = Name & Umur;
//atau
type Karyawan2 = Name | Umur;

const karyawan: Karyawan = {
  nama: "Budi",
  umur: 20
}

// *************************************** Type tidak bisa meng extend class
namespace InterfaceExtedClassNihh {
  class Hewan18 {
    nama: string;
    
    constructor(nama: string) {
      this.nama = nama;
    }
  }
  
  
  // Interface extend class
  interface HiuInterface extends Hewan18 {
    swim(): void;
  }
  
  // akan error, karna type tidak bisa extend class
  // type HiuType extends Hewan18 = {

  // }

  class Hiu implements HiuInterface {
    nama: string;
  
    constructor(nama: string) {
      this.nama = nama;
    }
  
    swim(): void {
      console.log('berenang');
    }
  }
}