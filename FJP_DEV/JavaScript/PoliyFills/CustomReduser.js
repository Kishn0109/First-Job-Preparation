function reduce(arr, cb) {
    let ans = 0; //0

    for (let i = 0; i < arr.length; i++) {
        ans = cb(ans, arr[i]); //1
    }
    return ans;
}

function sum(acc, val) {
    return acc + val;
}

let arr = [1, 2, 3, 4, 5];

let ans = reduce(arr, sum);
console.log(ans);
