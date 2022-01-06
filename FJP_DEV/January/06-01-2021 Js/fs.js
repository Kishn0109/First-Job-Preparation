const fs = require("fs");
//files
// fs.writeFileSync("./test.txt", "karan is good boy");
// fs.appendFileSync("./os.js", "//me add ho rha hu ");
// let connent = fs.readFileSync("./os.js");
// console.log("" + connent);

// //delete file
// fs.unlinkSync("test.txt");

//---------------------------------folders
// 1.creating directry ->mkdrir
// fs.mkdirSync("karan");
// 2.remove dir->rmdir
// fs.rmdirSync("karan");
// console.log("file remove");
//3.to check exist dir
// let ans = fs.existsSync("cjil");
// console.log(ans);

// 4. to check status->lstatSync
let status = fs.lstatSync("fs.js");
//5.to check is it a file or folder->isFile
// console.log(status.isFile());
//5.to check is it a folder or not->isDirectory
// console.log(status.isDirectory());

//6. read dir
let nodepath =
  "C:\\Users\\Prince\\OneDrive\\Desktop\\FJP PEPCODING\\FJP_DEV\\January\\06-01-2021 Js\\check";
let foltercontent = fs.readdirSync(nodepath);
console.log(foltercontent);
