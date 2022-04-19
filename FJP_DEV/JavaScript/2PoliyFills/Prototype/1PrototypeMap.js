
Array.prototype.myfunction = function (cb) {
    let ans = [];
    for (let i = 0; i < this.length; i++) {
        ans.push(cb(this[i]));
    }
    return ans;
}
function square(x) {
    return x * x;
}

let arr = [1, 2, 3, 4];
let map = arr.myfunction(function cb(x) {
    return x * x;
});
console.log(map)