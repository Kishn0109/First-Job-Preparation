//It refer this as {} when use it in arrow , Iska this se lena dena nahi hota 
//Imp->If we call arrow inside function and if function know the value of this then arrow function will also get this value 
let obj = {
    name: "karan",
    rollNo: 23,
    func: function () {
        // console.log(this.name);
        let arrow = () => console.log(this.rollNo);
        arrow();
    }
}
obj.func()
// let twxt = () => {
//     console.log(this.karan)
// }

// twxt()