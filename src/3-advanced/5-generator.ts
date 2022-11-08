function* generatorFunction(arg1: string) {
  yield 'Hallo';
  yield 'Zulfikar';
  yield arg1;
}

for (const word of generatorFunction('Isnaen')) {
  console.log(word)
}