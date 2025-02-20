const accountId = 3423432
let accountEmail = "lokibanna301@gmail.com"
var accountPassword = "1232"
accountCity = "Jaipur"

// accountId = 2 // not allowed

accountEmail = "logoz@hc.com"
accountPassword = "434323444"
accountCity = "Bengaluru"

/* prefer not to use var becouse of issue in 
block scope and functional scope */

console.table([accountId,accountEmail,accountPassword,accountCity])


// datatypes and ecma standards

"use strict"; // treat all JS code as newer version

// alert (3+3) // we are using node.js not browser 

console.log(3+3)


let name = "loki"
let age = 20
let isLoggedIn = false

// number => 2 to power 53
// bigint
// string 
//boolean true/false
//null => standalone value
//undefined =>
//symbol = unique 

console.log(typeof undefined); //undefined
console.log(typeof null); //object


// chabging the versions 

let score = "33"

console.log(typeof score)  //(typeof(score))
let valueInteger = Number(score)
console.log(typeof valueInteger);


//"33"=> 33
//"33abc"=> NaN
// true => 1
//false => 0

let self = 1
let booleanself= Boolean(self)
console.log(booleanself); // true

// false = 0,""= false

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
// "33"

// *******OPERATIONS*********
let value = 3
let negvValue = -value
// console.log(negvValue)

//console.log(2+2),
// (2-2)
//(2**2) power
// .......


let str1 = "hello"
let str2 = "loki"
let str3 = str1+str2
console.log(str3) // hello loki

console.log("1"+2); //12
console.log("1"+2+2); // 122
console.log(1+2+"2"); //32
console.log(+true) ; // 1
console.log(+"") ; // 0


let gameCounter = 100
++gameCounter; // or gameCounter++
console.log(gameCounter); //101
