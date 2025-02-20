const myArr = [0,1,2,3,4,5]
console.log(myArr[1]) //zero based indexing.

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]);

// ARRAY METHODS

myArr.push(6) // adding value at last 
myArr.pop() // removes last value
myArr.unshift(9) // add value at first
myArr.shift() // removes first element


console.log(myArr.includes(9)) //false

const newArr = myArr.join() // join changes arr to string 
console.log(newArr)
console.log(typeof newArr); //string

// SLICE OR SPLICE

console.log("A ",myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1); //[1,2]
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr); //[0,4,5]
console.log(myn2); //[1,2,3]

// ARRAY PART 2 

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["spiderman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); //['thor', 'ironman', 'spiderman', ["spiderman","flash","batman"]]
// console.log(marvel_heros[3][1]); //flash

const allHeros = marvel_heros.concat(dc_heros) // combines two or morw arr and returns new arr.

console.log(allHeros) //['thor', 'ironman', 'spiderman', 'spiderman', 'flash', 'batman']


// SPREAD OPERATOR $$$$$$$$$$
// SPREAD THE VALUE 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); //['thor', 'ironman', 'spiderman', 'spiderman', 'flash', 'batman']

//FLAT = return a new array with all subarray elements concatenated into it recursevily upto the specified depth.

const another_array = [1,2,3,[4,5,6],7,[8,9,[0,1]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]


// INTERESTING 
console.log(Array.isArray("Loki")) // false
console.log(Array.from("loki")); //['l', 'o', 'k', 'i']
console.log(Array.from({name:"loki"})); //EMPTY ARRAY 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //[100, 200, 300]
