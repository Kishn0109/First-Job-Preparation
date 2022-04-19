Array.prototype.myfilter = function (cb) {
    let filarr = [];

    for (let i = 0; i < this.length; i++) {
        let val = this[i];
        if (cb(val)) {
            filarr.push(val);
        }
    }
    return filarr;
}


let arr = [1, 2, 3, 4, 5, 6];
let filarr = arr.myfilter(function (val) {
    return val > 1;
})

console.log(filarr)