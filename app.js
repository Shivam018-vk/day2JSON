// console.log("Hello World")
// const cowsay=require("cowsay")
// console.log(cowsay.say({text:"I'm a mooooodule"}))
// function get_cows(error, cow_names) {
//     if (error) {
//         console.log(error)
//     }
//     else if (cow_names) {
//         console.log(`Number of cows available: ${cow_names.length}`);
//     }
// }

// cowsay.list(get_cows);
// const a=5
// console.log('The value of a is '+a)

// function greet(name,age){
//     let message =`Hello, ${name}!`;
//     let ages =`Your age is ,${age}`;
//     return message
// }

// const greeting =greet("Shivam",18);
// console.log(greeting)


// let counter=0;
// while(counter<3){
//     console.log(`Loop iteratuion :${counter}`);
//     counter+=1
// }
// console.log("While Loop Finished")

// const fruits =["Apple","Banana","Cherry"];
// for(let i=0;i<fruits.length;i++){
//     const fruit =fruits[i];
//     console.log(`Fruits at index ${i} is: ${fruit}`)
// }

// let temperature =25;

// if(temperature>30){
//     console.log("Its Hot Day!");
// }
// else if(temperature>20){
//     console.log("Its Pleasent day");

// }
// else{
//     console.log("Its a bit chilly today")

// }

// function calculateArea(length,width=1){
//     return length*width;
// }

// const rectangleArea=calculateArea(10,5);
// console.log(`Area of a 10X5 rectangle is ${rectangleArea}`);


// const squareArea=calculateArea(8);

// console.log(`Area of a square with side 8 using(default width)is: ${squareArea}`)

const getSum=function(a,b){return a+b};

const sum=getSum(25,26)
console.log(`The Sum of two number is ${sum}`)

const multiply =(x,y) => x*y;
console.log(`The product of two number is : ${multiply(5,6)}`);

// function mult(x,y){
//     const c=x*y;
//     return c;
// }
