// //filter
// let arr = [1, 2, 4, 5, 6];
// let filter = arr.filter((e) => e > 2).map((e) => e + 2).reduce((acc, e) => acc + e, 0);
// console.log(filter);

// //filter polyfill ->1.return arr if condition true 2.It takes arr,callback function
// //map
// //reduce
// function mfilter(arr, cb) {
//     let ans = 0;

//     arr.forEach(element => {
//         ans = cb(ans, element)
//     });
//     return ans;
// }

// function cb(ans, e) {
//     return ans + e;
// }

// let myans = mfilter(arr, (ans, e) => ans + e);
// console.log(myans, "myans")


//polyfills using prototype

Array.prototype.mymap = function (cb,acc) {

    this.forEach((e) => {
        acc=cb(acc,e)
    })

    return acc;
}
//normal map
let arr = [1, 5];
let ans = arr.map((e) => {
    return e + 2
})
let myans = arr.mymap((acc,e) => {
    return acc+e
},0)

console.log(myans)