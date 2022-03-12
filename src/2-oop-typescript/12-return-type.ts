// Berfungsi untuk membatasi atau mengatur type apa yang mau di return

class Burung {
  private kaki: number = 2;

  getKaki(): number {
    return this.kaki;
  }

  terbang(): void {
    console.log('Terbang!');
  }

  // jika langsung string akan error maka akan error
  async makan(): Promise<string> {
    return 'string'
  }
}