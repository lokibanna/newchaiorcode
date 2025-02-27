// for 
for (let i=0; i<= 10; i++){
    const element = i;
    if(element == 5){
        console.log("5 is best number ")
    }
    console.log(element)
}


// nested
for (let i =0;i<=10; i++){
    console.log(`outer loop value: ${i}`);
    for(let j = 0; j<=10; j++){
        // console.log(`inner loop value: ${j}`);
        console.log(i + '*' + j + ' = '+ i*j);
    }
}

let myArray = ["loki","love","yukta"]
console.log(myArray.length);
for(let i=0;i<myArray.length;i++){
    const element = myArray[i];
    console.log(element)
}
 // BREAK AND CONTINUE

 for (let j=1;j<=20;j++){
    if(j ==5){
        console.log(`detected 5`);
        break 
    }
    console.log(j)
 }

 for (let j=1;j<=20;j++){
    if(j ==5){
        console.log(`detected 5`);
        continue
    }
    console.log(j)
 }



 // WHILE AN DO WHILE

let index = 0
while (index <= 10){
    console.log(`value of index is ${index}`);
    index = index + 2
}

let dArray = ["loki","love","yukta"]
let arr = 0
while (arr<dArray.length){
    console.log(`value is ${dArray[arr]}`);
    arr = arr + 1

}
let score = 1
do {
    console.log(`Score is ${score}`);
    score++
}
while (score <= 10);

// let score = 11   
// do {
//     console.log(`Score is ${score}`);
//     score++
// }
// while (score <= 10);
 // here we will get answer 11
 
