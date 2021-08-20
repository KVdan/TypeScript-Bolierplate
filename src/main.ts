import { PPoint, point1, point2, point3, point4, PPPoint } from "./point";

// var is not block scope
// var is function scope
function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("Finally: " + i);
}
// doSomething();

let a: boolean = true;
let b: number = 1;
let c: string = "str";
let d: number[] = [3, 4, 5];
let e: any[] = [1, true, "a", false];

// enum used to handle named sets of constants
enum Color {
  Red = "#ff0000",
  Green = "#00ff00",
  Blue = "#0000ff",
}

let backgroundColor = Color.Red;

// type assertion
/*
 * let message = "abc";
 * let endsWithC = message.endsWith('c');
 */
let message;
message = "abc";
let endsWithC = (<string>message).endsWith("c");
let alternativeWay = (message as string).endsWith("c");

// if we do not use class to group relative code together
// we do things like this
// interface defines the shape of the object
interface Point {
  x: number;
  y: number;
}

let point0: Point = { x: 100, y: 100 };

let drawPoint = (point: Point) => {
  // ...
  console.log(`I am at (${point.x},${point.y})`);
};

let getDistance = (pointA: Point, pointB: Point) => {
  // ...
};

console.log("point1 y axis position is " + point1.Y);
point1.draw();
point1.getDistance(point2);
point1.X = 1;
point1.draw();
point1.getDistance(point2);
point3.getXYDistance(point4);
point3.getXYZDistance(point4);

let hello: (name: string) => void = function (name: string): void {
  console.log("hello " + name);
  console.log(this);
};

hello("dan");

// this var k is global scoped
var k = 1;
function test() {
  var locvar = 1;
  return k++;
}
test();
console.log(k);
test();
console.log(k);

// access modifier
// private 实例对象和子类都不能获取的属性
// protected 实例对象不能获取但子类能获取的属性
// public 实例对象和子类都能获取的属性
class Person {
  private name: string; // cannot be accessed by object instances
  age: number;

  // initialize name as "Lucy"
  constructor(age: number, name = "Lucy") {
    this.name = name;
    this.age = age;
  }

  // cannot accessed by object instances and  derived class
  // only can be accessed within the class
  protected getName(): string {
    return this.name;
  }

  public getDetails(): string {
    return "Name is " + this.getName();
  }
}

class Student extends Person {
  tmarks: number;
  constructor(name: string, age: number, tmarks: number) {
    super(age, name);
    this.tmarks = tmarks;
  }
  getMarks(): number {
    return this.tmarks;
  }

  getFullName(): string {
    return this.getName(); // getName is a  protected property in Person class
    // so we can get the access to it from the derived student class
  }

  setMarks(tmarks: number) {
    this.tmarks = tmarks;
  }
}

let _std1 = new Student("Sheena", 24, 500);
console.log("_std1 get  " + _std1.getMarks() + " marks.");
console.log("_std1 full name: " + _std1.getFullName());
console.log("_std1 details " + _std1.getDetails()); // getDetails() in Person Class is public

let _std2 = new Person(24, "Lily");
console.log("_std2 get details: " + _std2.getDetails());
