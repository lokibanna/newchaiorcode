const user = {
    username: "jitesh",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this) //talks about current context 
    }
}

user.welcomeMessage()
user.username = "loki"
user.welcomeMessage() //loki, welcome to website


console.log(this); // empty {} but in browser window


// function chai(){
//     let username = "loki"
//     console.log(this);
    // console.log(this.username) we can not use this in function it can be used in objects

// }

// chai()

// const chai = function(){
//     let username = "yukta"
//     console.log(this.username);

// }
// chai() //undefined


// const chai = () => {
//     let username = "yukta"
//     console.log(this.username);

// }
// chai() // undefined
// this , also provides same value as about empty {}.


// arrow function


// const addTwo = (num1,num2)=> {
//     return num1 + num2
// }
// console.log(addTwo(3,4)) // basic arrow fn


//implicit return


// const addTwo = (num1,num2)=>  num1 + num2
// const addTwo = (num1,num2)=>  (num1 + num2) //use return when {}.

// const addTwo = (num1,num2)=>  ({username : "yukta"})

// console.log(addTwo(3,4))


// ** IMMEDIATELY INVOKED FUNCTION (IIFE)
//named iife
(function chai(){
    console.log('LOVE YOU YUKTA ');
})(); // we use semicolon to end this IIFE otherwise this will give an error

// chai() INSTEAD BY CALLING IT WE WILL USE PARENTHESIS FOR DIRECT .
// GLOBAL SCOPE KE POLUTION SE DIKKAT HOTI HAI BAHUT BAAR ISLIYE POLUTION KO KAM KARNE KE CHAKKAR ME HUM IIFE KA USE KRTE HAI

( (name) => {
    console.log(`yukta is my love, ${name} `)

})(`loki`)
