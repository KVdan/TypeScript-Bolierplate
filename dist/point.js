"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.point2 = exports.point1 = exports.PPoint = void 0;
class PPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('X: ' + this.x + " Y: " + this.y);
    }
    getDistance(another) {
        console.log(`distance between (${this.x},${this.y}) and (${another.x},${another.y}) equals ${Math.pow(Math.pow(this.x - another.x, 2) + Math.pow(this.y - another.y, 2), 0.5)}.`);
    }
    get Y() {
        return this.y;
    }
    set X(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        }
        this.x = value;
    }
}
exports.PPoint = PPoint;
exports.point1 = new PPoint(0, 1);
exports.point2 = new PPoint(2, 3);
