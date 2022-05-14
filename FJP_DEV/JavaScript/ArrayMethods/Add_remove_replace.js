let arr = [1, 2, 3, 4, 5]
function push() {
    arr.push({ karan: 1 });
    console.log(arr)
}


function splice() {
    // splice(start)
    // splice(start, deleteCount)
    // splice(start, deleteCount, item1)
    // splice(start, deleteCount, item1, item2, itemN)
    // arr.splice(2, 2, "karan"); //replce out-> [ 1, 2, 'karan', 5 ]
    // arr.splice(2)
    // arr.splice(1, 10)
    // splice(start, deleteCount, item1)
    arr.splice(3, 1, "item1", "item2", "itemN")
    console.log(arr)
}

// let a = [];
// a.unshift(1);
// a.unshift(22);
// a.shift();
// a.unshift(3,[4,5]);
// a.shift();
// a.shift();
// a.shift();


// console.log(a);
let ans = -1 / 0;
console.log(ans);

// push()
// splice()