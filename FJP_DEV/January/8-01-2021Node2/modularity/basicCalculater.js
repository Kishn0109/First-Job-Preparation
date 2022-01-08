function add(a, b) {
  console.log("addition ", a + b);
}
function diff(a, b) {
  console.log("substraction ", a - b);
}
function mul(a, b) {
  console.log("multiplication ", a * b);
}
function div(a, b) {
  console.log("divide", a / b);
}
module.exports = {
  addition: add,
  substraction: diff,
  multiplication: mul,
  division: div,
};
