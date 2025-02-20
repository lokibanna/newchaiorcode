let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString);
console.log(myDate.toLocaleDateString);
console.log(typeof myDate); //object


// let myCreatedDate = new Date(2025, 0, 25)
// console.log(myCreatedDate.toDateString());
//Sat Jan 25 2025
// console.log(myCreatedDate.toLocaleString())
//1/25/2025, 12:00:00 AM

let myCreatedDate = new Date("01-14-2023")
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{
    weekday: "long"
})



