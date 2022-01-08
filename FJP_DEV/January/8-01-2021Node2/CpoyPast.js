//copy and paste logic
const fs = require("fs");
const path = require("path");

//src path
let srcpath =
  "C:\\Users\\Prince\\OneDrive\\Desktop\\FJP PEPCODING\\FJP_DEV\\January\\8-01-2021Node2\\mydir1\\f1.txt";

//des path
let despath =
  "C:\\Users\\Prince\\OneDrive\\Desktop\\FJP PEPCODING\\FJP_DEV\\January\\8-01-2021Node2\\mydir2";
let basefile = path.basename(srcpath);

//creating path
let finalpath = path.join(despath, "rahul");
fs.copyFileSync(srcpath, finalpath);
console.log(finalpath);
