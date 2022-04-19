function Filter(arr, cb) {
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
}

function filter(val) {
    return val > 4 ? true : false;
}

let arr = [1, 2, 3, 4, 5, 6];
let afterfilter = Filter(arr, filter);
console.log(afterfilter)