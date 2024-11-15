class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

     getArea(){
        return this.width * this.height
    }
}
const rec1 = new Shape(3,4);
rec1.getArea()
console.log(rec1.getArea())

class Rectangle extends Shape{
    constructor(width, height){
        super(width, height)
    }

    getArea(){
        return Math.sqrt((this.width) **2 + (this.height) **2)
    }
}
const rec2 = new Rectangle(3,4);
console.log(rec2.getArea())

class Tr{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

     getArea(){
        return this.width * this.height / 2
    }
}
const rec3 = new Tr(3,4);
console.log(rec3.getArea())

class Circle extends Shape{
    constructor(width, height, radius){
        super(width, height)
        this.radius = radius;
    }

    getArea(){
        return Math.round((this.width / 2) **2 * Math.PI)
    }
}
const cir1 = new Circle(3,4,2);
console.log(cir1.getArea())


