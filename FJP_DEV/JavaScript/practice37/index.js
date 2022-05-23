// 1
// let arr = [1, [2, 3, 4], [5, 6, [7, 8, 9]]];

// function flatten(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i];
//         if (Array.isArray(val) == true) {
//             flatten(val);
//         } else {
//             console.log(val);
//         }
//     }
// }
// flatten(arr);
// ques 2
// (function () {
//     var a = b = c = 3;
// })();

// // console.log("a defined? " +a);
// console.log("b defined? " + c);

// q3
// var myObject = {
//     foo: "bar",
//     func: function () {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         function k () {
//             console.log("inner func:  this.foo = " + this);
//             console.log("inner func:  self.foo = " + self.foo);
//         };
//         k();
//     }
// };
// myObject.func();

//ques3
// var d = {};
// ['zebra', 'horse'].forEach(function (k) {
//     d[k] = undefined;
// });
// if (d.zebra != undefined) {
//     console.log("karan");
// }
var arr1 = "john".split('');//['j','0','h','n']
var arr2 = arr1.reverse();// n h o i j o n e s 
var arr3 = "jones".split('');// 
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1);
console.log("array 2: length=" + arr2.length + " last=" + arr2);