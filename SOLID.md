# SOLID Principle

## SRP = Single Responsibility Principle
`A Class should have one reason to change, So thats mean one class must do one thing.`

### Example Problem SRP:

The problem is one class Vehicle have many responsibility that will not passed with SRP.
```ts
// One class have many responsibility
class Vehicle {
   getType() {}
   getEngineOil() {}
   getTypeRims() {}
   getBody() {}
}
```
### Solution
The solution is we split the Task to the spesific class, in this below:
```ts
// One class Have one responsibility
class Vehicle {
 ambilJenisKendaraan() {}
}
 
class Engine {
 getEngineOil() {}
}
 
class Rims {
 getTypeRims() {}
}
 
class Body {
 getBody() {}
}
```

## OCP = Open Close Principle
`A Class should be open for extension, but closed for modification.`

When we split responsibility of a class, we should do so in a way that behaviour can be extended or maybe replaced. 

### Example Problem OCP:
```ts
class Rectangle {
 width: number;
 height: number;
 constructor(_width: number, _height: number) {
   this.width = _width;
   this.height = _height;
 }
}
class Circle {
 radius: number;
 phi: 3.14;
 constructor(_radius: number) {
   this.radius = _radius;
 }
}
 
function AreaTotal(shape: (Rectangle | Circle)[]): number {
 let area: number = 0;
 shape.forEach(element => {
   if (element instanceof Rectangle) {
     area += element.height * element.height;
   } else if (element instanceof Circle) {
     area += element.phi * element.radius * element.radius;
   }
 });
 return area;
}
```

The problem of above code we have `AreaTotal` function that will calculate of type shape, now we only have type `Rectangle` and `Circle`, and how if we want to add more shape? We need to change `AreaTotal` as well that’s mean `AreaTotal` Function is **not closed modification**. that not pass with OCP.

### The Solution
```ts
abstract class Shape {
 abstract area(): number;
}
 
class Rectangle extends Shape {
 width: number;
 height: number;
 constructor(_width: number, _height: number) {
   super()
   this.width = _width;
   this.height = _height;
 }
 area(): number {
   return this.width * this.height;
 }
}
 
class Circle extends Shape {
 radius: number;
 phi: 3.14;
 constructor(_radius: number) {
   super()
   this.radius = _radius;
 }
 area(): number {
   return this.radius^2 * this.phi;
 }
}
 
// if we want to add shape we shouldn't to modify this function (close for modification), instead we extended shape(open for modification)
function AreaTotal(shapes: Shape[]) {
 let area: number = 0;
 shapes.forEach(element => {
   area += element.area();
 });
 return area;
}
```

In the above if we want to add shape we shouldn’t to modify `AreaTotal` function **Close for Modification** since we are not putting logic on there, instead we extended shape **Open for Modification.**

## LSP = Liskov Substitution Principle
`Subtype must be substitutable for their base types.`

### Example problem LSP:
```ts
class Rectangle {
 constructor(private width: number, private length: number) {}
 
 public setWidth(width: number) {
   this.width = width;
 }
 
 public setLength(length: number) {
   this.length = length;
 }
 
 public getArea() {
   return this.width * this.length;
 }
}
 
class Square extends Rectangle3 {
 constructor(side: number) {
   super(side, side);
 }
 
 public setWidth(width: number) {
   super.setWidth(width);
   super.setLength(width);
 }
 
 public setLength(length: number) {
   super.setWidth(length);
   super.setLength(length);
 }
}
 
 
const rect: Rectangle = new Square(5);
rect.setWidth(10) // i want expect the result is (5*10)
console.log(rect.getArea()) // but the actual is (10*10)
```

The problem in above code is we instantiate rectangle with Square class, Rectangle class will expect the result is `5 * 10 = 50`, but since we are instantiate using `Square class` then the result is `10 * 10 = 100`, Therefore `Rectangle class` and `Square class` is not **substitutable**. We need to **carefully using inheritance.**

## ISP = Interface Segregation Principle
`Dependency of one class to another one should depend on smallest possible interface.`
- Client should’nt be forced to implement interface they don’t use.
- Instead of having big interface, many small interface are preferred based on group of one submodule.

### Example problem ISP #1
```ts
interface IVehicle {
 getSpeed() : number;
 getVehicleType: string;
 isTaxPayed() : boolean;
 isLightsOn() : boolean;
 isLightsOff() : boolean;
 startEngine() : void;
 accelerate() : number;
 stopEngine() : void;
 startRadio() : void;
 playCd : void;
 stopRadio() : void;
}
```

### The solution for Example Problem ISP #1:
Instead of having big Vehicle Inteface we can split the interface, so if we need to instantiate only Engine we only need `IEngine interface`.
```ts
interface IVehicle {
 getSpeed() : number;
 getVehicleType: string;
 isTaxPayed() : boolean;
 isLightsOn() : boolean;
}
 
interface ILights {
 isLightsOn() : boolean;
 isLightsOff() : boolean;
}
 
interface IRadio {
 startRadio() : void;
 playCd : void;
 stopRadio() : void;
}
 
interface IEngine {
 startEngine() : void;
 acelerate() : number;
 stopEngine() : void;
}
```

### Example problem ISP #2:
The problem of below code is that, `Duck Interface` shouldn’t implement givingBirth since duck is layEggs, and `Cat Interface` shouldn’t implement layEggs since cat is givingBitrh.

```ts
interface Animal {
 eat(): void;
 layEggs(): void;
 givingbirth(): void;
}
 
// Duck shouldn't implement givingBirth since duck is layEggs
interface Duck extends Animal {
 eat(): void;
 layEggs(): void;
 givingbirth(): void;
}
// Cat shouldn't implement layEggs  since cat is givingBirth
interface Cat extends Animal {
 eat(): void;
 layEggs(): void; // Cat shouldn't have this
 givingbirth(): void;
}
```

### The Solution for Example problem ISP #2:
```ts
interface Animal {
 eat(): void;
}
 
interface Mammals extends Animal {
 eat(): void;
 givingBirth(): void;
}
 
interface Vertebrae extends Animal {
 eat(): void;
 layEggs(): void;
}
 
interface Duck extends Vertebrae {
 eat(): void;
 layEggs(): void;
}
 
interface Cat extends Mammals {
 eat(): void;
 givingbirth(): void;
}
```

We create new Mammals and Vertebrae interface, so Animal interface as a base interface, Duck interface will extends from Vertebrae not from Animal interface, and Cat interface will extends from Mammals interface. Duck will not have givingBirth and Cat will not have layEggs, therefore we can eliminate forced of **implementation interface they don’t use**.

## DIP = Dependency Inversion Principle
`Depend Upon abstract (interface) not upon concrete classes.`

### Example Problem DIP:
We have class Logger that will be implement on another module or service (Product). The product class will depend on concrete class (Product class). The line `private logger = new Logger();`  that’s mean the **product class will depend upon logger class.** The problem is that Product cannot be tested separately without the Logger class.
```ts
class Logger {
 log(message: string) {
   console.log(message);
 }
 error(message: string) {
   console.log(message);
 }
}
 
class Product {
 private logger = new Logger();
 async getAllProduct() {
   try {
     this.logger.log('Success get all products!');
     return [];
   } catch (error) {
     this.logger.log(error.message);
     throw new Error('Something Wrong');
   }
 }
}
```

To solve line `private logger = new Logger();`  is using **Dependency Injection**, now the logger is being injected to the Product class, without instantiate the Logger, but still exists the problem, we still need Logger class as a Type.

```ts
class Product {
 private logger: Logger;
 constructor(_logger: Logger){
   this.logger = _logger;
 }
 async getAllProduct() {
   try {
     this.logger.log('Success get all products!');
     return [];
   } catch (error) {
     this.logger.log(error.message);
     throw new Error('Something Wrong');
   }
 }
}
```
To solve above code is used **Dependency Inversion Principle (DIP)**. like code below:

```ts
class Logger implements ILogger {
 log(message: string) {
   console.log(message);
 }
 error(message: string) {
   console.log(message);
 }
}
 
interface ILogger {
 log(message: string): void;
 error(message: string): void;
}
 
class Product {
 private logger: ILogger;
 constructor(_logger: ILogger){
   this.logger = _logger;
 }
 async getAllProduct() {
   try {
     this.logger.log('Success get all products!');
     return [];
   } catch (error) {
     this.logger.log(error.message);
     throw new Error('Something Wrong');
   }
 }
}
```

Now the Product is not depend on Logger instead Both Logger and **Product will depend on abstract interface and not depend on concrete class**, and Product and Logger can be tested as independently.

## Benefits of implementing SOLID:
- **Clean**: clean and standarize of code.
- **Maintainable**: Manageable and easy for maintenance of code.
- **Scalable**:  Easy to refactor or change code.
- **Redundancy**: Avoids redundant code and make our code is efficient.
- **Testable**: Can be easily unit tested since we are implement DIP.
- **Readable**: Easy and readable.
- **Independent**: Reduce dependencies since we are implement DIP
- **Reusable**: Reusable code

## What will or might happen if not implemented well:

- SOLID commonly implement on complex code not recommended for simple application.
- Will take more time for development and increase the cost of the project.
- Will have some ineffiency like duplicate code to achieve priciples. 

