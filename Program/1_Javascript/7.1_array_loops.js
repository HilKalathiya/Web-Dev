let a = [1, 2, 3, 4, 5, "a", "b", "c", "d", "A", "B", "C", "D"]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}

a.forEach((value, index, a) => { // first value batave second index and third array che
    console.log(value, index, a);
})

for (const i of a) {
    console.log(i);
}

// making new array using old array te "map" thi thay che

let c = a.map((b) => {
    return b ** 2;
})
console.log(c);

const Grather_than_2 = (e) => {
    if (e > 2) {
        return true;
    }
    return false;
}
console.log(a.filter(Grather_than_2));


// reduce methode reduce array to single value
b1 = [1, 2, 3, 4, 5, 6, 7];

let multi = (a, b) => {
    return a * b;
}
console.log(b1.reduce(multi));

// "array.from" is use to form array from any object
let x = Array.from("Hil Kalathiya");
console.log(x)

// aa apdne array banavi ne ape che number thi ane hamesh array zero thi j sharu thay che
number = 6;
function factorial(number){
    let ar = Array.from(Array(number+1).keys());
    console.log(ar);
    
    // code for fectorial by reduce and making the array from a number
    let c1 = ar.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    return c1
}

console.log(factorial(number));