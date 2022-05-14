// https://javascript.info/string
let string = "karana \
is a good boy \
rahul";
let string_singleQute = 'karan';
let string_backticks = `karan`;
let object_string = new String("karan"); //if I use new then It will form object else string will form
console.log(string)
// console.log(typeof (string_backticks), typeof (object_string));

//access of string -treat It as array-like-0bject
console.log(string[0]);
console.log('karan'[0]);
console.log(string_backticks === object_string);//It will return flase because objectstring is typw of object ans other one is tyopw of string

//string primitive
let string_number_premitive = "2+20";
let string_number_object = new String("2+20");
console.log(eval(string_number_premitive))//22
console.log(eval(string_number_object))//[String: '2+20']
// A String object can always be converted to its primitive counterpart with the valueOf() method.
console.log(typeof (string_number_object.valueOf()))  // returns the number 22

// console.log("null"==null)