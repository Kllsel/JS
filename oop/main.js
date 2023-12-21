class Figure {
    constructor(name) {
        this._name = name;
    }

    get name() {
        if (this._name !== undefined) {
            return this._name;
        } else {
            alert("Name of the figure is undefined!");
        }
    }

    countArea() {
        return 0;
    }

    countPerimeter() {
        return 0;
    }

    showInfo() {
        console.log(`Name of the figure: ${this.name}\n`);
    }
}

let figure = new Figure("New figure");
figure.showInfo();


class Triangle extends Figure {
    constructor(name, side1, side2, side3) {
        super(name);

        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    countArea() {
        let p = (this.side1 + this.side2 + this.side3) / 2;
        let area =  Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
        return area;
    }
    countPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    showInfo() {
        super.showInfo();
        console.log(`Area: ${this.countArea()}\nPerimeter: ${this.countPerimeter()}`);
    }
}
class Rectangle extends Figure{
    constructor(name, side1, side2) {
        super(name);

        this.side1 = side1;
        this.side2 = side2;
    }

    countArea(){
        return this.side1 * this.side2;
    }
    countPerimeter(){
        return this.side1*2 + this.side2*2;
    }
    
    showInfo(){
        super.showInfo();
        console.log(`Area: ${this.countArea()}\nPerimeter: ${this.countPerimeter()}`);
    }
}


class Square extends Figure{
    constructor(name, side){
        super(name);
        this.side = side;
    }
    countArea(){
        return this.side * this.side;
    }
    countPerimeter(){
        return this.side*4;
    }
    showInfo(){
        super.showInfo();
        console.log(`Area: ${this.countArea()}\nPerimeter: ${this.countPerimeter()}`);
    }
}

let triangle = new Triangle("New triangle", 5, 5, 10);
let rectangle = new Rectangle("New rectangle", 5, 10);
let square = new Square("New square", 5);

let figures = [triangle, rectangle, square];
for(let i =0; i < figures.length; i++){
    figures[i].showInfo();
}

