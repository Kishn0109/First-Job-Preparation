let bfalse = false;

let bnull =  new Boolean(false); //0 -0 null undefine NaN "" false return false only
let z =  new Boolean(0); //0 -0 null undefine NaN "" false return false only
let mz =  new Boolean(-0); //0 -0 null undefine NaN "" false return false only
let ea =  new Boolean([]); //0 -0 null undefine NaN "" false return false only
let es =  new Boolean(""); //0 -0 null undefine NaN "" false return false only
let falsey =  new Boolean(undefined); //0 -0 null undefine NaN "" false return false only
// if (bnull) {
//     console.log(bnull);
// }
console.log(bnull,z,mz,ea,es,falsey)

if ("[]"==true) { console.log("[] is truthy") }         // logs "[] is truthy"
// if () { console.log("[] == false") } // logs "[] == false"

let arr = [1, 2, 3];
console.log(!!0);
console.log(!!-0);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!"");
console.log(!!false);
let karan = [];
if ("") {
    console.log("karan is false");
}
console.log("jhdkadjfhakjdhf"==false);