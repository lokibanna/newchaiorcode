

//{} if currly bracews comes with a function or if else then it is used as an scope.



// let a = 10
// const b =20
// var c = 300 value of global scope but if we call after giving value in local scope it will give the value of local scope when called.

let a = 300 // but let gives value different than local scope when calle.



if (true) {
    let a = 10
    const b =20
    console.log("INNER",a)
    // var c = 30 // var gives value outside the scope when it is called but let and const does not give .

}
console.log(a);
// console.log(b);
// console.log(c);

// $$$$ NEASTED FUNCTION
// CHILD CAN ACCES PARENT VARIABLE BUT PARENT CANT 

function one(){
    const username = "loki"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); can't aaccess child 
    two()
}
one()


if(true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); we can't access children element 
}
// console.log(username) 

// ********** INTEERESTING 

function addone(num){
    return num + 1
}
addone(5)



// addTwo(5) if we call value before declaration it will show an error 
const addTwo = function(num){
    return num + 2
}                     /* this method is known as hoisting declaration*/

addTwo(5) 