
function fn() {
    let x = 4;
    console.log("mywork");
    function child() {
        console.log(x + 5);
    }
    return child;
}


let child = fn();
child()
// console.log(child())
