"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const point_1 = require("./point");
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
let a = true;
let b = 1;
let c = "str";
let d = [3, 4, 5];
let e = [1, true, "a", false];
var Color;
(function (Color) {
    Color["Red"] = "#ff0000";
    Color["Green"] = "#00ff00";
    Color["Blue"] = "#0000ff";
})(Color || (Color = {}));
;
let backgroundColor = Color.Red;
let message;
message = "abc";
let endsWithC = message.endsWith('c');
let alternativeWay = message.endsWith('c');
let drawPoint = (point) => {
};
let getDistance = (pointA, pointB) => {
};
point_1.point1.draw();
point_1.point1.getDistance(point_1.point2);
point_1.point1.X = 1;
point_1.point1.draw();
point_1.point1.getDistance(point_1.point2);
