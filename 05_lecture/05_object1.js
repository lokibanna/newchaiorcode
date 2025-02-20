// singleton = only form by constructors 
// CONSTRUCTOR METHOD = OBJECT.CREATE

//OBJECT LITERALS

const mySym = Symbol("key1")


const JsUser = {
    name : "Loki",
    "full Name":"LOKENDRA SINGH RAJPUT",
    [mySym]: "mykey1", //way to define symbol otherwise it will show string when we use
    age : 20,
    location : "jaipur",
    email: "loki@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]

}

console.log(JsUser.email); //not efficient method
console.log(JsUser["email"])
// console.log(JsUser.fullName) // we cant access this by dot method bcz there is gap btw words
console.log(JsUser[mySym])

JsUser.email = "loki@chatgpt.com"
console.log(JsUser) //{name: 'Loki', full Name: 'LOKENDRA SINGH RAJPUT', age: 20, location: 'jaipur', email: 'loki@chatgpt.com', …}
// Object.freeze(JsUser)
// JsUser.email = "loki@microsoft.com"
// console.log(JsUser) //{name: 'Loki', full Name: 'LOKENDRA SINGH RAJPUT', age: 20, location: 'jaipur', email: 'loki@chatgpt.com', …}
// same output after freze we cant change.

JsUser.greeting = function(){
    console.log("hello loki banna ")
}
JsUser.greeting2 = function(){
    console.log(`hello loki banna ${this.name}`)
}

console.log(JsUser.greeting); /*(){
    console.log("hello loki banna ")
}*/
console.log(JsUser.greeting()) //hello loki banna

console.log(JsUser.greeting2())