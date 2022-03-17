// resolve calls then function

let mypromise = new Promise((resolve, reject) => {
  let a = 2;
  let b = 2;
  if (a == b) {
    resolve(a); //It will call then
  } else {
    reject();
  }
});

mypromise.then((a) => {
  console.log("then called", a);
});
mypromise.catch(() => {
  console.log("catch called");
});
