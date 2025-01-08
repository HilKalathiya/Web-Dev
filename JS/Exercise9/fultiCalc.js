let random = Math.floor(Math.random()*100);
let a = 51, b = 17;
console.log("The number are used in this calculator are: 51, 17");

if(random>20){
    console.log("\nThe sum of this number is: " +(a+b));
    console.log("\nThe subtraction of this number is: "+ (a-b));
    console.log("\nThe multiplication of this number is: "+ (a*b));
    console.log("\nThe division of this number is: "+ (a/b));
    console.log("\nThe power of this number is: "+ (a**b));
}

else{
    console.log("\nThe sum of this number is: "+ (a - b));
    console.log("\nThe subtraction of this number is: "+ (a * b));
    console.log("\nThe multiplication of this number is: "+ (a + b));
    console.log("\nThe division of this number is: "+ (a ** b));
    console.log("\nThe power of this number is: "+ (a / b));
}