// methode 2
let clouser = function (x) {
    function child(y) {
        console.log(x + y);
    }
    return child;
}

const child = clouser(2);
child(2)