// cohesion priciple (highly related instances should be put together)
// class - Groups variables (properties) and functions (methods) that are highly related


export class PPoint {
  // every class has a constructor
  // access modifier - private, public, protected
  // if the nth parameter is optional, then all parameters behind it are optional too
  constructor(public x?: number, public y?: number) {}
  // methods
  draw(): void {
    console.log("X: " + this.x + " Y: " + this.y);
  }

  protected getDistanceProtected(another: PPoint): void {
    console.log(
      `distance between (${this.x},${this.y}) and (${another.x},${
        another.y
      }) equals ${Math.pow(
        Math.pow(this.x - another.x, 2) + Math.pow(this.y - another.y, 2),
        0.5
      )}.`
    );
  }

  getDistance(another: PPoint): void {
    this.getDistanceProtected(another);
  }

  // get keyword
  // return
  get Y(): number {
    return this.y;
  }
  // set keyword
  // no return
  set X(value: number) {
    if (value < 0) {
      throw new Error("value cannot be less than 0.");
    }
    this.x = value;
  }
}



export class PPPoint extends PPoint {
  z: number; // now the new  property z is on PPPoint class
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  public getXYDistance(another: PPPoint): void {
    this.getDistanceProtected(another);
  }

  public getXYZDistance(another: PPPoint): void {
    console.log(
      `distance between (${this.x},${this.y},${this.z}) and (${another.x},${
        another.y
      },${another.z}) equals ${Math.pow(
        Math.pow(this.x - another.x, 2) +
          Math.pow(this.y - another.y, 2) +
          Math.pow(this.z - another.z, 2),
        0.5
      )}.`
    );
  }
}


// objects point1 and point2 are instances of class PPoint
export let point1 = new PPoint(0, 1);
export let point2 = new PPoint(2, 3);

export let point3 = new PPPoint(1,2,3);
export let point4 = new PPPoint(4,5,6);