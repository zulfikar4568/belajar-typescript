function getProperty<T, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}


// let x = {a: 1, b:2, c:3, d:4};

// console.log(getProperty(x, "a"));

// #################################################################################################

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// let str = prop({ name: 'John' }, 'name');
// console.log(str);

// Akan Error
// let str = prop({ name: 'John' }, 'age');