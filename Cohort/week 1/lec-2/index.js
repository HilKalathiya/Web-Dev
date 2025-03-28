let fname = "Ghanu";
const age = 120310132;
var isHuman = true;
console.log(`${fname} is ${isHuman} and his age is ${age}. `);
let arr = [1,3,2,74];
const sum = (age) => {
    return age + (age / 2);
}
let y  = sum(age);
console.log(y);

// object 
let obj = {
    name1: "Ghanu",
    age: 21,
    isHuman: true
}
console.log(obj.age);
console.log(obj["name1"]);

//array of objects

let ar = ['hil',19,{
    name: "Ghanu",
    age: 21,
    cities:["Surat","Gandbhinagar"]
}]
console.log(ar[2].name);
console.log(ar[2]["age"]);
console.log(ar[2].cities[0]);

function returning(array){
    let result =[];
    for(let i = 0; i < array.length; i++){
        if (array[i].age>=18&&array[i].gender=='M'){
            result.push(array[i]);
        }
    }
    
    result.forEach(element => {
        console.log(element);
    });
}
function othering(array){

    if (array.age >= 18 && array .gender == 'M') {
        return true;
    }
}

const user = [{
    name:"Hil",
    age: 19,
    gender: 'M'
},{
    name:"Jagrut",
    age: 17,
    gender: 'M'
},{
    name:"Sona",
    age: 21,
    gender: 'F'
}]
returning(user);
let result  = user.filter(othering);
console.log(result);

// reducefunction


let prices = [10.43,20.6,30.97,40.0,50.7];
let total = prices.reduce((prev,next)=>{
    return next - prev;
})
console.log(total.toFixed(2));
let grades =[60,70,10,50,90];
let max = grades.reduce(maxi) ;
function maxi(prev, next){
        return Math.max(prev, next);
    }

console.log(max);

// map function

const numbes = [1,2,3,4,5,6,7,8,9,10];
function square(elm){
    return Math.pow(elm,2);
}
let squareNum = numbes.map(square);
console.log(squareNum);

let resultUser = user.map((elm)=>{
    if(elm.age>=18&&elm.gender=='M'){
        return elm;
    }
})
console.log(resultUser);