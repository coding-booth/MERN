console.log('learning recursion');

//iterative factorial
// function factnum(num){
//     let  i=1;
//     let result =1;
//     while(i <= num){
//        result = result * i;
//        i++;
//     }
//     return result;
//    }
//    console.log(factnum(5));

   //Recursive factorial
function getfact(num){
    console.log(`Get factorial called for ${num}`);
    if(num === 1 || num === 0){
        return 1;
    }
    let fact = getfact(num-1);
    return num * fact;
}
console.log(getfact(5));
