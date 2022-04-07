function mycustonmap(arr, cb) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(cb(arr[i]));
    }
    return ans;
}

function square(x) {
    return x * x;
}
let arr = [1, 2, 3, 4];
let ans = mycustonmap(arr, square);
console.log(ans);

