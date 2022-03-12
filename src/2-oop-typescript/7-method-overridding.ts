class Hewan7 {

  bernafas() {
    console.log(`sedang bernafas`)
  }
}

class Gajah7 extends Hewan7 {
  //method overriding
  bernafas() {
    console.log('ga bisa nafas!');
  }
}

const gajah7 = new Gajah7();
gajah7.bernafas();