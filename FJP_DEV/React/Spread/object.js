//spead operater in objext
//It will not make copy of nested key
let spreadop = {
    name: "karan", //It will be copy new copy
    address: {
        //It will be copy new copy
        pinkcode: 110, //It will note make because It is nested
    },
};

let After_Spread = { ...spreadop };
spreadop.address.pinkcode = 100; // It will make changes inside After_Spread as well as in original object beacuse After_Spread is ssallow copy
//problem
console.log(After_Spread.address.pinkcode, spreadop.address.pinkcode); //both object will change and show same output->100 100
//problem

// Solution ->use JSON or refer to JsonDeepCopy file for more info
