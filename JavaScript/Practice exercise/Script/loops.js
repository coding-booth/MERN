// console.log("Multiplication Table");

// let num =prompt("Enter table nimber");
// let i=1;
//  while (i<=10){
//       console.log(`${num} x ${i} = ${num*i}`);
//       i++;
//  }

// for (let a=1; a<=10; a++){
//    console.log(a);
// }

// function factnum(num1){
//     let  i=1;
//     let result =1;
//     while(i<=num1){
//        result *= 1;
//        i++;
//     }
//     return result;
//    }

//  console.log("Factorial table");

//  let num = prompt("Enter Factorial num");
//  console.log(factnum(num));

// function reverseTheDigit(num){
//     let result =0;
//     for(;num>0;){
//         let rem =num % 10;
//         result =result *10 + rem;
//         num =Math.floor(num/10);
//     }
//     return result;
// }
// console.log(reverseTheDigit(123456789));

// function isPrime(num){
//     for (let i=2; i<num; i++){
//         if(num % i === 0){
//             return false;
//         }
//         return true;
//     }
// }
// console.log(isPrime(7));

// function isPositiveNum(){
// let num;
// do{
//     num = prompt('Enter positive number');

// }while(num <0);
// return num;
// }
// let num = isPositiveNum();
// console.log(`The Positive Number is: ${num}`);

for(let i=0; i<50; i++){
    if(i % 2 ===0){
        continue;
    }
    if(i % 17 === 0){
        break;
    }
    console.log(i);
}