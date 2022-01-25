// callback:- any function  which is passes as a argument to another function  known as callBack function

// applications web scraping
function source(src, cb) {
  console.log(src);
  console.log("to");
  cb("mumbai");
}
function destination(destination) {
  console.log("destination");
}
source("delhi", destination);
