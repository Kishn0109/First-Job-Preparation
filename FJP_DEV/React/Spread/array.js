// It used to make new refrence of an instance

let arr = [1, 2, 3, 4];

let arr2;
//before
arr2 = arr; //arr2 will refer to arr variable  array
arr2.push(10);
console.log(arr2, arr); //both will be same 
//after

arr2 = [...arr]; //arr2 will refer to the new array which made by spread operator
arr2.push(10);
console.log(arr2, arr); //different
