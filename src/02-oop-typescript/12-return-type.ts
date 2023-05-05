// Berfungsi untuk membatasi atau mengatur type apa yang mau di return

export class Burung {
  private kaki: number = 2;

  getKaki(): number {
    return this.kaki;
  }

  terbang(): void {
    console.log('Terbang!');
  }

  // jika langsung string akan error maka akan error harus Promise<T>
  async makan(): Promise<string> {
    return 'string'
  }
}


// const cendrawasih = new Burung()

// TIDAK MEMPUNYAI RETURN
// cendrawasih.terbang()

// KEMBALIKAN NUMBER
// console.log(cendrawasih.getKaki())

// KEMBALIKAN PROMISE STRING
// console.log(cendrawasih.makan())