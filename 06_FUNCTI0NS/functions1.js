// console.log("L")
// console.log("O")
// console.log("K")
// console.log("I")

function sayMyName(){
    console.log("L")
    console.log("O")
    console.log("K")
    console.log("I")
}

sayMyName()

// function addTwoNumbers(number1,number2){   //parameters
//     console.log(number1+number2);
// }
// addTwoNumbers(3,4) //arguments
// addTwoNumbers(3,"a") ; 3a 
// addTwoNumbers(3,null); 3 

function addTwoNumbers(number1,number2){   //parameters
    let result = number1 + number2
    return result 
    // return number1 + number2 
    
    // console.log(number1+number2); after return no code runs 
}

const result = addTwoNumbers(3,5)
// console.log("result",result); 8


function loginUserMessage(username){
    return `${username} just logged in`

}
console.log(loginUserMessage("loki"))
// console.log(loginUserMessage("")) // just logged in
// console.log(loginUserMessage()) //undefined





function loginUserMessage(username){
    if(username === undefined){       //if(!username)
        console.log("pls enter a username")
        return
    }
    return `${username} just logged in`

}
console.log(loginUserMessage())



// SHOPPING CARTS
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500)) // we are using rest operator if we not use this will provide the first value only .


function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000)) // [500, 2000]

const user = {
    username: "loki",
    price : 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username : "loki",
    price:199
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]))