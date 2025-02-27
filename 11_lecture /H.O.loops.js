// for of 
//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr){
    console.log(num);
}

const greetings = "Hello Loki"
for (const greet of greetings){
    console.log(`each char is ${greet}`)
} // 

// MAPS
const map = new Map()
map.set('IN',"India")
map.set('Fr',"france")
map.set('loki',"lokendra singh")
map.set('IN',"India") // it does not repeat

console.log(map)

for (const [key, value] of map){
    console.log(key,':-',value);


}
const myObject = {
    'game1':'NFS',
    'game2':'spiderman'
}
// for (const[key,value] of myObject){
//     console.log(key,':-',value);
// }  // object is not iterable

const myObject1 = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for(const key in myObject1){
    console.log(`${key} shortcut is for ${myObject1[key]}`)

}

const programmming = ["js","rb","py","javs","cpp"]
for (const key in programmming){
    console.log(programmming[key]);
}

// for each

const coding = ["js","rb","py","javs","cpp"]

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

coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})

// accessing objects in arrays

const myCoding =[

    {
        lang:"javascript",
        langFile: "js"
    },
    {
        lang : "python",
        langFile : "py",

    },
    {
        lang : "java",
        langFile:"java"
    }
]
myCoding.forEach((item) => {
    console.log(item.lang);
}) 


