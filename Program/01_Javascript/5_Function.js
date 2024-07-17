function nice(name){
    console.log(`Hello ${name}`); //${name} aa khali `` vala maj vapray 
    console.log(`${name} You are very good`);
    console.log(`${name} You are looking handsome`);
}

nice('hil');

function sum(a,b,d=15){
    return a+b+d;
}
let a = 1, b = 2,c;
c = sum(a,b);
console.log(c);
c = sum(a, b,5);
console.log(c);
function factorial(n){
    if(n==1||n==0){
        return 1;
    }
    else{
        return n*factorial(n-1  )
    }
}
console.log(factorial(15))

// this is a arrow function ana thi apde function ne variabe ma pakdi shakvi chavi
const func1 = (x)=>{
    console.log(`hello i am arrow function ${x}`)
}
 func1(35)



// aa apdne array banavi ne ape che number thi ane hamesh array zero thi j sharu thay che
number = 6;
function factorial(number) {
    let ar = Array.from(Array(number + 1).keys());
    console.log(ar);

    // code for fectorial by reduce and making the array from a number
    let c1 = ar.slice(1,).reduce((a, b) => {
        return a * b;
    })
    return c1
}

console.log(factorial(number));