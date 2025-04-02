//this is sync code
function sum(n){  //#2
    let n1 = 0;  //#3
    for(let i = 0;i<n;i++){  // #for some time
        n1 += i; 
    }
    return n1; // #5
}
ans = sum(15); //#1
console.log(ans);  //#6 end

//setyTimeout
let timeOutId = setTimeout(function(){
    console.log("Hello World! with 5 sec delay");
},5000);