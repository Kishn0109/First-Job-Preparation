var figlet = require("figlet");
// import chalk from "chalk";

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

import chalk from "chalk";

console.log(chalk.blue("Hello world!"));
