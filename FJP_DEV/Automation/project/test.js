let obh = {
    karan: "rai",
    nikhil: "rai",
    rahul: "rai",
}
let obh2 = {
    karan: "rai",
    nikhil: "rai",
    rahul: "rai",
}
let ans = {};
for (let i in obh) {
    ans[i] = [obh[i], obh2[i]];
}
console.log(ans)
