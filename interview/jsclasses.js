class Rectangel1 {
    constructor(height, width) {
        this.height = height;
        this.width = width; 
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }

    *getSides() {
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }

    static displayName = "Display Name property"

    static distance(a,b) {
        const dx = a.height - b.width;
        const dy = a.width - b.height;
        return Math.hypot(dx, dy);
    }
}

// Expression; the class is anonymouse but assigned to avariable

const Rectangle1 = class {
    constructor(heigth, width) {
        this.height = height;
        this.width = width;
    }
}

const Rectangel = class Rectangle2{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const some1 = new Rectangel1(30,50)
console.log(some1.area)

console.log([...some1.getSides(), ...some1.getSides()])


console.log(some1.displayName);
console.log(some1.distance)


const point1 = new Rectangel1(5,5);
const point2 = new Rectangel1(10,10);
console.log(Rectangel1.displayName);
console.log(Rectangel1.distance(point1,point2))


// Private and Public

class Animal {
    constructor(name){
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // should mention super first in constructor if have constructor in subclass
    }
    speak() {
        console.log(`${this.name} barks.`)
    }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks


class Cat {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} is roars`);
    }
}

const l = new Lion("Fuzzy");
l.speak();


class Animal2 {
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}

const obj = new Animal2();
console.log("animal instance", obj.speak()); // the animal object

const speak = obj.speak;
console.log(speak);
console.log(speak()); // undefined


console.log(Animal2.eat()) // class Animal2


// Functional fn


function Jawan() {}

Jawan.prototype.tell = function () {
    return this;
}

Jawan.eat= function(){
    return this;
}

const msobj = new Jawan();
const tell = msobj.tell;
console.log(tell());

const eats = Jawan.eat;
console.log(eats());