//this is synchoronously do the tasks
const fs = require("fs"); //this like imporint fs module to this code

// don't do this this do sync so it take so much time

const cont = fs.readFileSync("D:\\web devlopment\\Cohort\\week 2\\lec-1\\a.txt","utf-8"); //this is reading the file a.txt and storing it in contents variable
console.log(cont); //this is printing the contents of the file a.txt 
const contentB = fs.readFileSync("D:\\web devlopment\\Cohort\\week 2\\lec-1\\b.txt","utf-8");
console.log(contentB);

// functional argument 
function sum(a,b){
    return a + b;
}
function multi(a,b){
    return a * b;
}
function subtract(a,b){
    return a - b;
}
function divide(a,b){
    return a / b;
}
function doOperation(a,b,op){
    return op(a,b);
}

console.log(doOperation(3, 5, subtract))

// I/O task doing async is very good

fs.readFile("./a.txt","utf-8",function(err,contents){
    console.log(contents);
});
fs.readFile("./b.txt","utf-8",function(err,contents){
    console.log(contents);
});