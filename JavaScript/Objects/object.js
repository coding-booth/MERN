console.log('Learning Objects');

let product = {
company: 'Mango',
price: 1000,
};
//accessing object

//dot notation
console.log(product.price);
//bracket notation
console.log(product['company']);

console.log(product);
//modify the object
product.weight =1;
product.price =300;

console.log(product);

// delete key
delete product.weight;

console.log(product);
console.log(typeof product);
