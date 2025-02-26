// switch(key){
//     case value :
//         break;

//     default:
//         break;    
// }

const month = 3
switch(month){
    case 1 :
        console.log("January")

        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("March")
        break;  // if break is not available than all the code will be executed except default.


    default:
        console.log("default case match")
        break;    
}

//### truthy and falsy value
const userEmail = [] // if empty string is there than falsy value
if (userEmail){
    console.log("Got user email");

} else {
    console.log("Don't have user email");
}

// FALSY VALUE
/* FALSE,0,-0,BigInt,0n,"",null,undefined,NaN
*/

// TRUTHY VALUES
// "0","FALSE"," ",[],{},function(){}


// if(userEmail.length === 0){
//     console.log("Array is empty ")

// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// MORE IMP
// false == 0, true
//false == '',true
//0 == '',true


// NULLLISH COALECSING OPERATOR (??): NULL UNDEFINED

let val1;
// val1 = 5 ?? 10 , it will taKE 5
// val1 = null ?? 10 //,it will 10
val1 = undefined ?? 15 // 15
// val1 = null ?? 10 ?? 20 , // 10 
console.log(val1);


// TERNIARY OPERATOR
// CONDITION ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
