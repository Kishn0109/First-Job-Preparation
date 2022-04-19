// issues and resolutions

let obj = {
    name: "karan",
    age: 19,
    info: function (a, b) {
        let name = this.name;
        age = this.age;
        console.log("I am from obj ");
        console.log("It is the value of a", a, b);
        console.log("how are you what are you doing bro ")
    }
}
let obj1 = {
    name: "karan rai",
    age: 191,
}
function fn2() {
    console.log("fn2", 2);
    let b = 10;
}
// obj.info.call(fn2(2), 2); //call methode 
// let apply = obj.info.apply(obj1);
let func = obj.info.bind(this, 2);
func(10);