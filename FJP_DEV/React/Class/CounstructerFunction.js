// When we use function as constructor that time it is known as Counstructor function
// example 
function car(name, color) {
    this.name = name;
    this.color = color;
    this.functionality = () => {
        console.log(this.name)  //I have to ask on doubt support 
    }
}
let car1 = new car("rahul", "white");
car1.name;
console.log(car1.functionality())