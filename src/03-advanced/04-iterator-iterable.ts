// Iterator
const karakterNama: string = 'zulfikar';
for (const karakter of karakterNama) {
  console.log(karakter)
}

const dataAngka: number[] = [1,2,3]
for (const angka of dataAngka) {
  console.log(angka);
}

//Iterable
const obj = {
  [Symbol.iterator]: function() {
    let step: number = 0;
    const iterator = {
      next: function() {
        step++
        if (step === 1) {
          return { value: 'Hallo', done: false }
        } else if (step === 2) {
          return { value: 'Zul', done: false }
        }
        return { value: undefined, done: true }
      }
    }
    return iterator;
  }
}

for(const word of obj) {
  console.log(word)
}