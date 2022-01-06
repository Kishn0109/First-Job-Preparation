// child process is a node module use to create sub process ,we can perdorm defferent task
const cp = require("child_process"); //we can create sub process
console.log("trying to open calculater");
cp.execSync("start chrome"); //opening calculator
