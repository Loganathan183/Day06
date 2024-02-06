//B.CLASS CIRCLE
class Circle {
    constructor(...arr) {
        this.radius = arr[0];
        this.color = arr[1];

        this.arr = arr.filter((i) => i != undefined);

        if (this.arr.length == 0) {
            console.log("Empty")
        } else if (this.arr.length == 1) {
            console.log(`Radius : ${this.radius}`)
        } else {
            console.log(`Radius : ${this.radius}, Color : ${this.color}`)
        }
    }
    
    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setRadius(rad) {
        this.radius = rad;
    }

    setColor(col) {
        this.color = col;
    }

    toString(){
        return `Radius : ${this.radius}, Color : ${this.color}`;
    }

    getArea(){
        return Math.PI * Math.pow(this.radius, this.radius);
    }

}
let q = new Circle()    // => Empty
let r = new Circle(5.5) // => Radius : 4.5
let s = new Circle(5.5, "blue")  // => Radius : 5.5, Color : blue

//OUTPUT
/*
Empty
Radius : 5.5
Radius : 5.5, Color : Blue
*/