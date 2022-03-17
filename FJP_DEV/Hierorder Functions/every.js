let arr = [1, 2, 3, 1];
let ans = arr.every((value) => {
  return value > 0; //every element must satisfy the condition then only it will return true
});
console.log(ans);
//next time we will make own polifyl of map, filter, reducer
