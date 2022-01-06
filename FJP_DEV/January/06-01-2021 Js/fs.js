const fs = require("fs");

fs.writeFileSync("./test.txt", "karan is good boy");
fs.appendFileSync("./os.js", "//me add ho rha hu ");
let connent = fs.readFileSync("./os.js");
console.log("" + connent);

//delete file
fs.unlinkSync("test.txt");
