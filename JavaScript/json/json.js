let user ={
firstname: 'Ajay',
lastname: 'singh',
age: 25,
email: 'ajay@singh.com',
hobbies: ['books','music'],
};
console.log(user);

let userstr = JSON.stringify(user);
console.log(userstr);
console.log(typeof userstr);

let newuser = JSON.parse(userstr);
console.log(newuser);