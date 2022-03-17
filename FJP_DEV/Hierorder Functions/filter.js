// return ood values using filter
// let arr = [1, 2, 3, 4, 5, 6];
// let ans = arr.filter((value) => {  //using call back function
//   return value % 2 != 0;
// });
// let ans = arr.filter(function (value) {
//   //using normal function
//   return value % 2 != 0;
// });

// console.log(ans);
// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

// let myans = transactions.filter((value) => {
//   return value > 0;
// });

let arr = [
  { name: "karan", age: 4, gender: "M" },
  { name: "karan", age: 34, gender: "M" },
  { name: "karan", age: 3, gender: "F" },
  { name: "karan", age: 34, gender: "M" },
];
//chain scoping
let ans = arr
  .filter((obj) => {
    if (obj.gender == "M") {
      return obj.age;
    }
  })
  .map((obj) => {
    return obj.age;
  });
console.log(ans);
