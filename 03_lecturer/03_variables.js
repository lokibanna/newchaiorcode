const name = "loki"
const repocount = 50

console.log(name + repocount + "value") //loki50value

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String(`hitesh`)
console.log(gameName[0]);
console.log(gameName.__proto__) // all the functions are stores here.

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'))


const newString = gameName.substring(0,4)
console.log(newString);
const anotherString =  gameName.slice(-6,4)
console.log(anotherString);


const ns1 = "  hitesh  "
console.log(ns1.trim()); // trimstart(),trimend()

const url = "I AM LOKENDRA SINGH RAJPUT"
console.log(url.replace("LOKENDRA","LOKIBANNA"))
console.log(url);
console.log(url.includes('LOKENDRA')); //true


// OTHER PROTOTYPE
//ANCHOR
//AT
//BLINK
//BOLD
//CONCAT
//CONSTRUCTOR
//ETC


// ********* MATHEMATICS IN JS ********

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
// here the number is converted into string but it is still the number and can represent operations of a string .

console.log(balance.toFixed(2)) //100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); //23.9 //if2 = 24 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000

// $$$$$$ MATHEMATICS $$$$$$

console.log(Math);
console.log(Math.abs(-4)) // gives neg to positive vLUE
console.log(Math.round(4,6))
// we can use ceil and floor also 
// min and max 

console.log(Math.random()); // btw 0 and 1
console.log((Math.random()*10)+1); // +1 is for increasing the value by one as we use floor.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min)


// #### DATES #####






