console.log('Call by Value');
let a =10;
let b =a;
console.log(`a=${a}, b=${b}`);
a =15;
console.log(`a=${a}, b=${b}`);

console.log('Call by Referance');
let x ={value: 10};
let y =x;
console.log(`x=${x.value}, y=${y.value}`);
x.value =15;
console.log(`x=${x.value}, y=${y.value}`);

console.log(x == y);