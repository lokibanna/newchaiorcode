// console.log(2>1);
// console.log(2>-=1);


console.log("2" > 1); // we should compare same datatype but here we are getting true;

console.log(2 != 1); // true

console.log(null>0); // false 
console.log(null == 0); // false
console.log(null >= 0); //true

console.log(undefined == 0); // false in all three cases 

// === checks values and datatypes both 

console.log("2"===2); // false 
console.log("2"==2); // true 


// DATATYPES SUMMARY

//**********PRIMITIVE DATATYPES********

// 7 TYPES : String, number , boolean,null,undefined,symbol,bigInt


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false


const bigNumber = 8945734857332324n


// *********REFERENCE OR NON PRIMITIVE TYPES *************

// ARRAY,OBJECTS,FUNCTIONS


const heros = ["shaktiman","naagraj"]
let myObj = {
    name:"loki"
    
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(myFunction) /*(){
    console.log("Hello world");
} */

console.log(typeof myFunction) // object function    

const number = null; 
console.log(typeof number); // OBJECT

//MEMORY
// STACK(PRIMITIVE) takes copy of data ,  HEAP(NON - PRIMITIVE) reference to original value 

let myYoutubename = "lokibanna"
let anothername = myYoutubename
anothername = "lokendra singh rajput"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "lokiraj@gmail.com"
    // upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "lokibanna301@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
