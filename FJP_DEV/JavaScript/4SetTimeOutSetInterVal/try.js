// function karan() {
//     function rahul() {
//         console.log("rahul")
//     }
//     return { rahul }
// }

// const { rahul } = karan();
// rahul()
let count = 0;
let id = setInterval(() => {
    console.log("interval");
    count++;
}, 200);
setTimeout(() => {
    clearInterval(id);
}, 1000)
console.log("out");