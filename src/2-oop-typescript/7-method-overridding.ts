export class Hewan7 {

  bernafas() {
    console.log(`sedang bernafas`)
  }
}

export class Gajah7 extends Hewan7 {
  //method overriding
  bernafas() {
    console.log('ga bisa nafas!');
  }
}

// Method akan di timpa jika kita membuat method dengan nama yang sama
// const gajah7 = new Gajah7();
// gajah7.bernafas();