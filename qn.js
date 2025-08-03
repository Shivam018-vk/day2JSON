// let sum=0;
// for(let i=0;i<1000;i++){
//     if(i%3==0 || i%5==0){
//         sum=sum+i;
//     }
// }
// console.log(sum)

// Find the  sum of all even fibonacci numbers under 4000000

// let a=0
// let b=1
// let series=[]
// let ans=0
// for(let i=0;i<=5;i++){
//     let series=a+b;
//     a=b;
//     b=series
//     console.log(series)
//     // if(series%2==0){
//     //     ans=ans+series;
//     // }
//     // console.log(ans)
//     if(series%2==0){
//         ans=ans+series;
//         console.log(ans)
//     }

// }

// let a=0;
// let b=1;
// let sumEven =0;


// while(a<4000000){

//     if(a%2===0){
//         sumEven+=a;
//     }
//     let next =a+b;
//     a=b;
//     b=next;
//     // console.log(a)
// }
// console.log(sumEven)



// let num=600851475143
// // let num=13195
// let factor=2

// while(factor*factor<=num){
//     if(factor%2===0){
//         num=num/factor;
//     }
//     else{
    //         factor++;
    //     }
    // }
    
    // console.log(num)
    
    // n=answer is 6000 something
    
//     // qn 4
//     function sumOfDigitsNumericalMethod(num) {
//       let sum = 0;
//       num = Math.abs(num); 
    
//       while (num > 0) {
//         sum += num % 10; // Get the last digit
//         num = Math.floor(num / 10); // Remove the last digit
//       }
//       return sum;
//     }
//  let fact=1;
//  for(let i=1;i<=100;i++){
//     fact=fact*i;

// }
// console.log(BigInt(fact))
// console.log(sumOfDigitsNumericalMethod(fact))

// function isPrime(n) {
//     if (n < 2) return false;
//     if (n === 2) return true;
//     if (n % 2 === 0) return false;
//     for (let i = 3; i * i <= n; i += 2) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// function* permutations(str) {
//     if (str.length <= 1) yield str;
//     else {
//         for (let i = 0; i < str.length; i++) {
//             let char = str[i];
//             let remaining = str.slice(0, i) + str.slice(i + 1);
//             for (let subPerm of permutations(remaining)) {
//                 yield char + subPerm;
//             }
//         } 
//     }
// }

// function findLargestPandigitalPrime() {
//     for (let n = 7; n >= 1; n--) {
//         let digits = "";
//         for (let i = n; i >= 1; i--) {
//             digits += i.toString(); 
//         }
//         let perms = Array.from(permutations(digits)).map(Number);
//         perms.sort((a, b) => b - a); 

//         for (let num of perms) {
//             if (isPrime(num)) return num;
//         }
//     }
//     return -1;
// }

// console.log("Largest n-digit pandigital prime is:", findLargestPandigitalPrime());

