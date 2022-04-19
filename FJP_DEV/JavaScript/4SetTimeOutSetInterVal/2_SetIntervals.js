//interval->every time  interval hmara function call hoga

// setInterval(function () {//every time it return Its id
//     console.log("interval")
// }, 1000);
//output->Every Time at this Inteval (1) pr function call hogo vo bhi for  infite time  and to stop It use clearInterval
// //interval
// interval
// interval
// interval
// interval

let count = 0;
let intervalId;
intervalId = setInterval(function () {//every time it return Its id
    console.log("interval", count)
    if (count >= 0) { //ek bar jb condition hit hogi tb to chalega but uske baad ye use stop kr dega 
        clearInterval(intervalId)
    }
    console.log("interval", count)
    ++count;
}, 1000);

//----------------- output-----------------
// interval 0
// interval 0