
// case1
// console.log(this)

// case2
// function fn() {
//     console.log(this) //global
// }
// fn()

// case3
// let obj = {
//     karan: "is good boy",
//     fn: function cb() {
//         console.log(this)
//     }
// }
// obj.fn()  //object itselt

// case3
// let obj = {
//     karan: "is good boy",
//     fn: function cb() {
//         function child() {
//             console.log(this);  //globel
//         }
//         return child;
//     }
// }

// let func = obj.fn();
// func();