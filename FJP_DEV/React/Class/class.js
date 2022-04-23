//class jesa kuch nahi hota js me
//tamplet ki tarha use kiya jata hai of an object
// coustructor is a methode not a function
//Imp  we can write function inside class but do not use function keywoard otherwise It will give me error 
class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    welcome() {
        console.log("welcome")
    }
}

let rahul = new Car("rahul", "white");
rahul.welcome()
console.log(rahul)