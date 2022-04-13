let spreadop = {
    name: "karan",
    address: {
        pinkcode: 110
    }
}
let nested = {
    name: "nested"
}

//these all are deep copy using spread operator

// let myobj = { ...spreadop, address: { ...spreadop.address }, address: { name: "karan" } };//First address will remove and seconde will add and output will be { name: 'karan', address: { name: 'karan' } }
// let myobj = { ...spreadop, address: { ...spreadop.address }, karan: { ...spreadop.address } };//second addresss will not count  output->{ name: 'karan', address: { pinkcode: 110 }, karan: { pinkcode: 110 } }
let myobj = { ...spreadop, address: { ...spreadop.address, area: { ...nested } }, karan: { ...spreadop.address } };//second addresss will not count  output->{ name: 'karan', address: { pinkcode: 110 }, karan: { pinkcode: 110 } }
spreadop.address.pinkcode = "karan";

console.log(myobj)