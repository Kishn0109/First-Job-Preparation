const fs = require("fs");
console.log("before");
let promiss = fs.promises.readFile("f1.text"); //Promise { <pending> }
console.log("after");
promiss.then((data) => {
  console.log(data);
});
