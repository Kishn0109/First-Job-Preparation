class Person {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
class Teacher extends Person {
    constructor(name, color, salary) {
        // this.name = name;
        // this.color = color;before 
        // after 
        super(name, color) //It is a keyword
        this.salary = salary;
    }
}
class Student extends Person {
    constructor(name, color, rollno) {
        // this.name = name;
        // this.color = color;before 
        // after 
        super(name, color)
        this.rollno = rollno
    }
}

let techer = new Teacher("name", "white", 239);
let truedent = new Student("name", "white", 239);
console.log(techer, truedent)