// for each

// const coding = ["js","rb","py","javs","cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

// accessing objects in arrays

// const myCoding =[

//     {
//         lang:"javascript",
//         langFile: "js"
//     },
//     {
//         lang : "python",
//         langFile : "py",

//     },
//     {
//         lang : "java",
//         langFile:"java"
//     }
// ]
// myCoding.forEach((item) => {
//     console.log(item.lang);
// }) 




// const coding = ["js","rb","py","javs","cpp"]

// const values = coding.forEach(  (val){
//     // console.log(val);
//     return val
// })
// console.log(values); // for each does not return values


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num) => num>4)
// const newNums = myNums.filter( (num) => {
//     return num > 4 // here we have to write return if we have open scope
// })
console.log(newNums)

const newNums1 = []
myNums.forEach( (num) => {
    if (num>4){
        newNums.push(num)
    }
})
console.log(newNums);

// use of filter


// use of nums 

// const myNUmers = [1,2,3,4,5,6,7,8,9,10]
// const neewNums1 = myNUmers.map( (num) => num + 10)
// console.log(newNums);

// chaining 
const myNUmers = [1,2,3,4,5,6,7,8,9,10]
const neewNums1 = myNUmers
                .map( (num) => num * 10)
                .map( (num) => num+1)
                .filter( (num) => num>40)
console.log(newNums);


// REDUCE 
