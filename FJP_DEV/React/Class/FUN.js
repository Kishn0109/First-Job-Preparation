
class Color {
    constructor(color) {
        console.log(" colour is " + color);
    }
    colour(color) {
        console.log("Its color is ", color, this)
    }
    // karan(color) { //Maximum call stack size exceeded error
    //     console.log("Its color is ", color, this.karan())//By this we can access its function also 
    // }
    karan = () => {
        console.log(this) //It will refer to the class Itself
    }
}
class Fruit extends Color {
    constructor(name, price) {
        super()
        // this.colour("bgmi") //Now this can access functions which are in Color class 
        // this.karan()
        this.name = name;
        this.cost = price;
    }
    ThisWithNormal() {
        console.log("normal", this);
    }
    ThisWithArrow = () => {
        console.log("arrow", this);
    }
}

let mango = new Fruit("mange", 30);

console.log("line 34", mango.ThisWithArrow(), mango.ThisWithNormal())