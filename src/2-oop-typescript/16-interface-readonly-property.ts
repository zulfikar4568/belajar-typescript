interface Murid {
  readonly nama: string;
  readonly umur: number;
}


let murid: Murid = {nama: "zul", umur: 23};

// Akan error karna readonly kita hanya bisa assign 1x itupun karena sebelumnya belum ada apa-apa
// murid.nama = "Zul2";