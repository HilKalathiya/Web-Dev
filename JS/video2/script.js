console.log("Jay Swaminarayan ");

var a = prompt("Enter the Number a:");
var b = prompt("Enter the Number b:");

var sum = Number(a) + Number(b); // this var is globaly difined thay che;
console.log("The sum of a and b is: " + sum);
console.log(typeof(a),typeof(b),typeof(sum));
for(let i = 0; i<10; i++){
    let n = 10;
    console.log(i);
    console.log(n);
}
const c = 10; //it will not change after this

//cosole.log(n); // this will give error because i used let to declare it so it is only definde for that block;


 let o = {
    name: "Jay Swaminarayan",
    age: 21,
    isMale: true,
    bodyCount: 0
 }
    console.log(o); 
    o.salary = "100cr";
    console.log(o);