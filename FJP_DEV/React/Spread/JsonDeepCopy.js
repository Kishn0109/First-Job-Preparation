// Deep copy 

let spreadop = {
    name: "karan",
    address: {
        pinkcode: 110
    }
}

let After_Spread = JSON.parse(JSON.stringify(spreadop));
spreadop.address.pinkcode = 100; // It will make changes inside After_Spread as well as in original object beacuse After_Spread is ssallow copy


console.log(After_Spread.address.pinkcode, spreadop.address.pinkcode) //both object will not show same output-> 110 100


