let arr = [1, 2, 3, 4];

// getting all the values
// let [a, b, c] = arr; // 1,2,3
// getting particular the values
// let [a, b,] = arr; 1,2



// using default values particular the values 
//If arr>=[a,b,c,d].length default will note work 
// let [a, b, c = "default"] = arr;  //1,2,3
//else It will work
arr = [1, 2];
let [a, b, c = "default"] = arr;  //1,2,3

console.log(a, b, c)