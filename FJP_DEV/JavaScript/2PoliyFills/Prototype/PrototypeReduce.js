Array.prototype.myreduce = function (cb, value) {
    let ans = value;
    for (let i = 0; i < this.length; i++) {
        ans = cb(ans, this[i]);
    }
    return ans;
}

let arr = [1, 2, 3, 4, 5];
let sum = arr.myreduce(function cb(acc, val) {
    return acc + val;
}, 0)


console.log(sum);
