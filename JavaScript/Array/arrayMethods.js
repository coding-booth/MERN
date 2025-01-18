console.log('Different Methods of array');
let arr = [1,2,3,4,5,6,7,8,9];
let obj ={};
console.log('isArray', Array.isArray(arr));
console.log('isArray', Array.isArray(obj));

console.log(arr);
arr.push(13);
console.log(arr);
arr.pop();
console.log(arr);
arr.sort();
console.log(arr);

arr.forEach(function(item,a){
    console.log(item,a);
});

arr.forEach(function(item,a){
    if (a === 2 ) return;
    console.log(item,a);
});
