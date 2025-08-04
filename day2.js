// // const myObject={
// // "name":"alice",
// // "age":25,
// // 'isStudent':true,
// // "hobbies":["reading","coding"],
// // "adress":{
// //     "city":"New York",
// //     "zipCode":"10001"
// // }
// // }
// // console.log(`Name:${myObject.name}`);
// // console.log(`hobbies:${myObject.hobbies[0]}`);
// // console.log(`Zipcode:${myObject.adress.zipCode}`);

// // let arr = []
// // let even = 0;
// // for (let i = 0; i <= 10; i++) {
// //     // arr.push(i)
// //     arr.push(i * 3)
    


// // }
// // // console.log(arr)
// // if(arr%5==0){
// // even.push(arr)
// // }
// // console.log(even)

// // function sumArray(sum){

// //     for(let i=0;i<arr.length;i++){
// //         total+=arr[i]
// //     }
// //     return total;
// // }
    
// // let arr=[]
// // let total=0;
// // for(let i=0;i<=100;i++){
// //     let triple=i*3;
// //     if(triple %5 ===0){
// //         arr.push(triple)
        
// //     }
// //     // console.log(triple)
// // }
// // console.log(arr)
// // const total_sum=sumArray(arr)
// // console.log(total_sum)


// // Sir Answer 

// // for(i=1;i<=100;i++)a.push(i)
// // a=[2,3,4,5,6]
// // [3,6,8,9].reduce((a,x)=>a+x)
// // function abc(x){return x*3}

// // [3,4,-5,-6,7]

// a = [];
//  for(i=1;i<=100;i++) a.push(i);  
// a = [2,3,4,5,6];  
// [3,6,8,9].reduce((a,x)=>a+x);  
// function abc(x){return x*3}  
// // console.log([3,4,-5,-6,7].filter(x=>x>0).reduce((a,x)=>a+x));
// // console.log([3,4,-5,-6,7].filter(x=>x>0).reduce((a,x)=>a+x));

// // a.reduce((a,x)=>{
// //     if(x>0){
// //         return a+x
// //     }
// //     else{
// //         return a
// //     }
// // })
// // console.log(a)

// const users =[
//     {name:'Alice',age:25},
//     {name:'Bob',age:30},
//     {name:'Charlie',age:25},

// ]
// console.log(users)

// let sum = users.reduce((a,user)=>a +user.age,0);
// let average =sum/users.length;
// console.log(average)


    
// try{
//     const jsonData='{"name":"Alice","age":25}';
//     const user =JSON.parse(jsonData);
//     console.log("User data:",user.name);

//     const badJson ='{"name":"Bob}'
//     const badUser =JSON.parse(badJson);
//     console.log(badUser.name);
// }catch(error){
//     console.log("An error occured! Details:",error.message);

// }
// console.log("Program continues to run here")


// PART2
// const fs=require('fs/promises');

// async function processNames(){
//     const inputFilePath="names.txt";
//     const outputFilePath="formatted_names.txt";

//     try{
//         console.log("starting the process file...");

//         const fileContent =await fs.readFile(inputFilePath,'utf8');

//         const names =fileContent.trim().split("\n");

//             console.log(`Read ${names.length}names.`);

//             const formattedNames =names.map(name=>{
//                 const trimmedNames =name.trim();
//                 return trimmedNames.charAt(0).toUpperCase()+trimmedNames.slice(1).toLowerCase();
//             });
//             const outputContent =formattedNames.join("\n");

//             await fs.writeFile(outputFilePath,outputContent,'utf8');

//             console.log(`Successfully processed names and saved to ${outputFilePath}`);
        
//         }catch(error){
//             console.log("An error occurred:",error.message);
//         }
//         }
//         processNames();


// PART 3
// const fetch = require('node-fetch');

// async function fetchPosts() {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     console.log("Fetching posts from API...");

//     try {
//         const response = await fetch(url);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const posts = await response.json();
//         console.log("Successfully fetched posts!\n");

//         posts.slice(0, 5).forEach((post, index) => {
//             console.log(`${index + 1}. ${post.title}`);
//         });

//     } catch (error) {
//         console.error("Failed to fetch posts:", error.message);
//     }
// }

// fetchPosts();
  

// QN1

// const num = BigInt(2) ** BigInt(1000);
// const sum = num
//   .toString()
//   .split('')
//   .map(Number)
//   .reduce((acc, val) => acc + val, 0);

// console.log("The Sum of the digit of Number 2^1000",sum);

// Qn2
// let f1 = BigInt(1);
// let f2 = BigInt(1);
// let index = 2;

// while (true) {
//     const next = f1 + f2;
//     index++;
//     if (next.toString().length >= 1000) {
//         console.log("First Fibonacci number with 1000 digits is at position:", index);
//         break;
//     }
//     f1 = f2;
//     f2 = next;
// }

// function collatzLength(n, memo) {
//   if (n === 1) return 1;
//   if (memo[n]) return memo[n];

//   let next = n % 2 === 0 ? n / 2 : 3 * n + 1;
//   memo[n] = 1 + collatzLength(next, memo);
//   return memo[n];
// }

// function findLongestCollatz(limit) {
//   let maxLength = 0;
//   let startingNumber = 1;
//   let memo = {};

//   for (let i = 1; i < limit; i++) {
//     let length = collatzLength(i, memo);
//     if (length > maxLength) {
//       maxLength = length;
//       startingNumber = i;
//     }
//   }

//   console.log(`Starting number under ${limit} with the longest chain: ${startingNumber}`);
//   console.log(`Length of chain: ${maxLength}`);
//   return startingNumber;
// }

// findLongestCollatz(1000000);
// SHIVAM