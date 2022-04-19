
//--------------------------Try by me

// let id = 0;
// id = function rec() {
//     if (id == 5) {
//         return 0;
//     }
//     console.log("karan");
//     setTimeout(rec, 1000);
//     return id++;
// }
// rec()

//---------------------------By sir
function parentInterval() {
    let inervalId = 0
    let intervalMap = {}
    function interval(cb, delay = 0, ...args) {
        id = inervalId++

        function repeat() {
            intervalMap[id] = setTimeout(
                () => {
                    cb(...args)
                    // Terminating
                    if (intervalMap[id]) {
                        repeat();
                    }
                }, delay);
        }
        repeat();
        return id;
    }

    function clearinterval(inervalIdn) {
        clearTimeout(intervalMap[inervalIdn]);
        delete intervalMap[inervalIdn];
    }
    return { interval, clearinterval };
}
const { interval, clearinterval } = parentInterval();

let count = 0;
let terminateId;
function cb() {
    console.log("cb")
    count++;
    if (count >= 5) {
        clearinterval(terminateId);
    }
}
terminateId = interval(cb, 1000)


