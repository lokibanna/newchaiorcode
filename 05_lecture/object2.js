// const tinderUser = new Object()   , singletn

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ls@gmail.com",
    fullname: {
        userfullname:{
            firstname:"loki",
            lastname:"Rajput"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) // copy the value of all enumerable own properties from one or more source object to a target object, returns the target object

// console.log(obj3);//{1: 'a', 2: 'b', 3: 'a', 4: 'b'}
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"l@gmail.com"
    },
    {

    },
    {

    }


]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // output is array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged')) //false


// DESTRUCTURING
const course = {
    coursename: "js in hindi ",
    price: "999",
    instructor: "loki"
}
// course.instructor
const {instructor: Instructor} = course

console.log(Instructor);

// api formats

// {
//     "name":"loki",
//     "coursename":"js"
//     "price":"free"
// }


// [
//     {},
//     {},
//     {}
// ]
// can be array,object