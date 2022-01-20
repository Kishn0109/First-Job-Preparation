const fs = require("fs");
const path = require("path");
let arr = process.argv;
let command = arr[2];

let types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

// console.log(command);
switch (command) {
  case "organise":
    organise(arr[3]);
    break;
}
function organise(testpath) {
  if (testpath == null) {
    console.log("We need path to organse the folder, so please enter the path");
    return;
  } else {
    if (fs.existsSync(testpath)) {
      let organisedirpath = path.join(testpath, "organise");
      if (!fs.existsSync(organisedirpath)) {
        fs.mkdirSync(organisedirpath);
      }
      //   console.log(organisedirpath);
      let all_data = fs.readdirSync(testpath);
      for (let i = 0; i < all_data.length; i++) {
        let fileName = all_data[i];
        let file_path = path.join(testpath, fileName);
        if (fs.lstatSync(file_path).isFile()) {
          //   organisehelper(file_path, organisedirpath);
          let categary = findcategory(file_path);
          console.log(fileName);
          organisehelper(file_path, organisedirpath, categary);
        }
      }
    } else {
      console.log("please enter vaild path the path");
      return;
    }
  }
}

function findcategory(file_path) {
  fileName = path.extname(file_path);
  fileName = fileName.substring(1);
  for (let type in types) {
    let child = types[type];
    for (let i = 0; i < child.length; i++) {
      if (child[i] == fileName) {
        return type;
      }
    }
  }
  return "other";
}
function organisehelper(src, des, categry) {
  //   console.log(categry);
  //   console.log("src", src);
  //   //   console.log();
  let categrypath = path.join(des, categry);
  if (!fs.existsSync(categrypath)) {
    fs.mkdirSync(categrypath);
    // console.log("aaya");
  }
  //   console.log(fs.existsSync(categrypath));
  //   fs.copyFileSync(src, categrypath);
  let finalpath = path.join(categrypath, path.basename(src));
  fs.copyFileSync(src, finalpath);
  fs.unlink(src, (err) => {
    if (err) throw err;
    console.log("path/file.txt was deleted");
  });
}
