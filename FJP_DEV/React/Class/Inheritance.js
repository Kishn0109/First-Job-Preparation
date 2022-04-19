class Person {
    constructor(name, age) {
        (this.name = name), (this.age = age);
    }

    welcome() {
        console.log("hello " + this.name)
    }
}
class Teacher extends Person {
    constructor(name, color, salary) {
        // this.name = name;
        // this.color = color;before 
        // after 
        // super(name, color) //It is a keyword
        this.salary = salary;
    }

    teacherfunc() {
        super.welcome()
    }
}
// class Student extends Person {
//     constructor(name, color, rollno) {
//         // this.name = name;
//         // this.color = color;before
//         // after
//         super(name, color)
//         this.rollno = rollno
//     }
//     hello() {
//         super.welcome()
//     }
// }
class Student extends Person {
    constructor(name, age, cgpa) {
        super(name, age);
        this.cgpa = cgpa;
    }

    hello() {
        super.welcome()
    }
}
let person1 = new Person("Adam", 25);

let techer = new Teacher("name", "white", 239);
let student2 = new Student("Mark", 21, 8.0);
// let truedent = new Student("name", "white", 239);
console.log(techer)
// console.log(student1.welcome())