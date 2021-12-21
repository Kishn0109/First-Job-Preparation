//1->object is key value pair value can be (fn,array,number,boolean,string) etc
//2->add new properties
//3->delete key in object
//4->bracket notation syntex
//5->key will be in **string** form (for in loop) (.notaion not work in (for in loop))
//6->https://www.geeksforgeeks.org/what-is-type-coercion-in-javascript/
//7->free code camp for javascript
let ka = {
  firstName: "karan",
  lastName: "rai",
  age: 19,
  address: {
    city: "delhi",
    nationality: "India",
  },
  frinds: ["x", "y"],
  sayHi: function hii() {
    console.log("hii karan");
  },
};
function hii() {
  console.log("hii from hii karan");
}

// console.log(ka["firstName"]); //bracket notation syntex
// console.log(ka.firstName); //bracket notation
// console.log(hii(), "undefined");
// // ka.sayHi();

// for in loop

//key will be in **string** form
//use in object for iteration
for (let key in ka) {
  console.log("kay: ", key, "value ", ka[key]);
}

ka.firstName += "rahul"; // add new properties
console.log(ka);
//delete key in object
delete ka.firstName;
console.log(ka);
