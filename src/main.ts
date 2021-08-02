import {PPoint,point1,point2} from './point';

// var is not block scope
function doSomething() {
    for(var i=0;i<5;i++){
        console.log(i);
        }
    console.log('Finally: '+i);
}
// doSomething();

let a:boolean = true;
let b:number = 1;
let c:string="str";
let d:number[] = [3,4,5];
let e:any[] = [1, true, "a",false];

// enum used to handle named sets of constants
enum Color { Red="#ff0000", Green="#00ff00", Blue="#0000ff"};

let backgroundColor = Color.Red;

// type assertion
/* 
* let message = "abc";
* let endsWithC = message.endsWith('c');
*/
let message;
message = "abc";
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

// interface defines the shape of the object
interface Point {
    x:number,
    y:number
}

let drawPoint = (point: Point) => {
    // ...
}

let getDistance = (pointA: Point, pointB: Point)=>{
    // ...
}

point1.draw();
point1.getDistance(point2);
point1.X = 1;
point1.draw();
point1.getDistance(point2);





















