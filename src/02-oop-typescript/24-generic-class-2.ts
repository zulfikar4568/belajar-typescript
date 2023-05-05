export class ClassA {
  name: string = 'Class A';
}

export class ClassBaru<T> {
  classProp: T;

  constructor(classProp: T) {
    this.classProp = classProp;
  }
}

// const classA = new ClassA();
// const classBaru = new ClassBaru(classA);
// console.log(classBaru)