let num = 6;
// let result;
// if (num % 2 == 0){
//     result='even';
// }
// else{
//     result= 'odd';
// }

let result = num % 2 == 0 ? 'Even' : 'Odd' ;// Ternary operator
console.log(`Number is ${result}`);

// let username = "Vaibhav";
// let fallbackvalue = 'Guest';
// let greeting = `Welcome ${ username || fallbackvalue}`;
// console.log(greeting);

let username = 0;
let fallbackvalue = 'Guest';
let greeting = `Welcome ${ username ?? fallbackvalue}`;
console.log(greeting);

