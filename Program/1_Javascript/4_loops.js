let a = 15;

for(let i =0; i<=a;i++){
    console.log(a+i);
}

let obj ={
    name:"Hil Kalathiya",
    role:"progrsmmer",
    company:"Google Inc"
}

for(const k in obj){
    const element = obj[k];
    console.log(element);
}  // this is forin loop and this is for the object

for(const char of "hil kalathiya"){
    console.log(char);
} //this is forof loop and this is use for itrable objects like 'strings' and "array"
//  tena char ne print karava mate thay che

let j = 0
while(j<10){
    console.log(j);
    j++;

}
let l = 0
do {
    console.log(l);
    l++;
} while (j< 1);