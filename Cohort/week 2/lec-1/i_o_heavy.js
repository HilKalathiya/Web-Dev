//this is synchoronously do the tasks
const fs = require("fs"); //this like imporint fs module to this code

// don't do this this do sync so it take so much time

const cont = fs.readFileSync("D:\\web devlopment\\Cohort\\week 2\\lec-1\\a.txt", "utf-8"); //this is reading the file a.txt and storing it in contents variable
console.log(cont); //this is printing the contents of the file a.txt 
const contentB = fs.readFileSync("D:\\web devlopment\\Cohort\\week 2\\lec-1\\b.txt", "utf-8");
console.log(contentB);

// functional argument 
function sum(a, b) {
    return a + b;
}
function multi(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    return a / b;
}
function doOperation(a, b, op) {
    return op(a, b);
}

console.log(doOperation(3, 5, subtract))

// I/O task doing async is very good
function callBack(err, data) { //this is one way
    if (err) {
        console.log("Error is " + err);
    }
    else {
        console.log("data is " + data + "\n");
    }
}
fs.readFile("D:\\web devlopment\\Cohort\\week 2\\lec-1\\a.txt", "utf-8", callBack );
fs.readFile("D:\\web devlopment\\Cohort\\week 2\\lec-1\\b.txt", "utf-8", function (err, data,) { //this is another way to do this
    if (err) {
        console.log("Error is " + err);
    }
    else {
        console.log("data is " + data + "\n");
    }
});
setTimeout(function print(){
    console.log("done! after 5sec");
},5000)
console.log("Done"); 

// some code prectice to learn async

function timeOut(){
    console.log("it's time to get Out!");
}
console.log("Hi!");
setImmediate(timeOut,500);
console.log("jay Swaminarayan");

let c = 0;
for(let i = 0;i<10000000000;i++){
    c = c + 1;
}
console.log("Expensie task done"); 
// this expensive valu pahela thase bhale te 3 sec le pan jayre setTimeOut puru thayu tayre cpu tread is busy to do the for loop so that will exicuted after the loop