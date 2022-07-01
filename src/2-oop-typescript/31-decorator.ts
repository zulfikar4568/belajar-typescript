function Logger(logString: string) {
  console.log('LOGGER FACTORY')
  return function(constructor: Function) {
    console.log(logString)
    // const p = new constructor();
    // console.log(p.name)
    console.log(constructor)
    console.log(constructor.prototype)
    
  }
}

function Logger2(logString: string) {
  console.log('LOGGER FACTORY 2')
  return function(constructor: any) {
    console.log(logString)
    const p = new constructor();
    console.log(p.name)
    console.log(constructor)
    console.log(constructor.prototype)
  }
}

@Logger('CLASS DECORATOR')
@Logger2('CLASS DECORATOR 2')
class Person {
  name = 'Max'

  constructor(){
    console.log("initialized")
  }
}