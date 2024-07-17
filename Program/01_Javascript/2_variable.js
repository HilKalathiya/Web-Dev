console.log("this for variable");
// var a = 59;
// var b = 62;
// var c = "Jay Swaminarayan";
/*we use let to define variables not var in morden js
 var che te global code che jo tame tene koi code block ma
 banavo to pan te akha js code ma lagu pade che 
 and let te block ma kam kare bahar banavo to global nahitar
 local*/

let a = 59;
let b = 62;
let c = "Jay Swaminarayan";
console.log("a=" + a);
console.log("sum of a and b is :" + (a + b));
console.log("PRODUCT of a and b is :" + a * b);
console.log("suptraction of a and b is :" + (a - b));
console.log("division of a and b is :" + a / b);
console.log("exponential of a and b is :" ,(a**b));
console.log(typeof a, typeof b, typeof c);

{
  let a = 5;
  console.log("now 'a' is changed in block a=" + a); // you see
}
console.log("a is now unchanged out of the block a=" + a);
const a1 = 6; //this is constant it will not change

let x = "Hil Kalathiya";
let y = 22;
let z = 35.32;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

let o ={
    "name": "Hil Kalathiya",
    age : 17,
    "profation role" : "Student",
    is_handsome : true,
} //this is an object and this is use to print multiple things together and name is key word
console.log(o)
o.fees = "0 Rs"  //this will add in object
console.log(o)
o.age = 18  //this will change the age in object 
console.log(o)
