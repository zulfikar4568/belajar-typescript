//Interface juga punya inheritance

interface Kendaraan {
  nama: string;
  roda: number;
}

interface Mobil extends Kendaraan {
  pintu: number;
}


class Pajero implements Mobil {
  nama: string = 'Pajero';
  roda: number = 4;
  pintu: number = 4;
}