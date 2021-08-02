// cohesion priciple (highly related instances should be put together)
// class - Groups variables (properties) and functions (methods) that are highly related

export class PPoint {
    // every class has a constructor
    // access modifier - private, public, protected
    constructor(public x?:number,private y?:number){
    }
    // methods
    draw(){
        console.log('X: '+this.x+" Y: "+this.y);
    }
    getDistance(another: PPoint){
        console.log(`distance between (${this.x},${this.y}) and (${another.x},${another.y}) equals ${Math.pow(Math.pow(this.x-another.x,2)+Math.pow(this.y-another.y,2),0.5)}.`);
    }
    // get keyword
    get Y(){
        return this.y;
    }
    // set keyword
    set X(value:number){
        if(value<0){
            throw new  Error('value cannot be less than 0.');
        }
        this.x = value;
    }
}

// objects point1 and point2 are instances of class PPoint
export let point1 = new PPoint(0,1);
export let point2 = new PPoint(2,3);


