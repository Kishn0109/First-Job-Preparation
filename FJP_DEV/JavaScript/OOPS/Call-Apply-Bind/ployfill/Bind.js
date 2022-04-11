const mytry = function (a) {
    console.log(a);
}
// const tryans = mytry.bind(this, 1);

// tryans(23)


Function.prototype.mybind = function (...args) {
    let bj = this;
    function ans(...ans) {
        console.log(args[0])
        bj.call(args[0]);
    }
    return ans;
}

const bindgiv = mytry.mybind(1);
bindgiv();