function Logger3(logString: string) {
  console.log('LOGGER FACTORY')
  return function<T extends { new (...args: any[]): { name: string }}>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super()
        console.log('Initialized 2, kita bisa bikin logic disini')
        console.log(this.name)
        console.log(args)
      }
    }
  }
}

@Logger3('CLASS DECORATOR')
class Person2 {
  name = 'Max'

  constructor(){
    console.log("initialized")
  }
}

const p2 = new Person2()