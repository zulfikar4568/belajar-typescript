//Interface juga punya inheritance

interface Kendaraan {
  nama: string;
  roda: number;
}

// Mobil akan membawa property Kendaraan
interface Mobil extends Kendaraan {
  pintu: number;
}


export class Pajero implements Mobil {
  nama: string = 'Pajero';
  roda: number = 4;
  pintu: number = 4;
}