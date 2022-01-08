const path = require("path");
let extantion_name = path.extname(
  "C:UsersPrinceOneDriveDesktopFJP PEPCODINGFJP_DEVJanuary8-01-2021Node2mydir2\f1.txt"
);
let basename = path.basename(
  "C:\\Users\\Prince\\OneDrive\\Desktop\\FJP PEPCODING\\FJP_DEV\\January\\8-01-2021Node2\\mydir2\\f1.txt"
);
console.log(basename);
console.log(__dirname); // dir path
console.log(__filename); //file path
