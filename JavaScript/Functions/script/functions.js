console.log('Hi Vaibhav');

//return function
function randomnum(){
    let num = Math.floor(Math.random()* 4 +1);
    return num;
}
let a = randomnum();
console.log(`Random num is: ${a}`);

//Function with parameters
function getsum(a, b){
    let sum = a + b;
    return sum;
}
console.log(getsum(9, 7));
console.log(getsum(241, 218));