// it return true of false
// if any one of Element of array satisfy the condition then it will return true
// else return false
let arr = [1, 2, 3, 1];
let ans = arr.some((value) => {
  return value < 0;
});
console.log(ans);
