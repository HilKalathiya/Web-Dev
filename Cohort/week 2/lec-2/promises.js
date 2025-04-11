// classes in JS
class Rectangle{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width *this.height;
        return area;
    }
    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}

const rect  = new Rectangle(6,8,"Cyan");
const area = rect.area();
console.log(area);
rect.paint();

// some more classes

const now = new Date();
console.log(now.getFullYear());


const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));




// Promise Class
//it is promise  us that i will return you value in future
// A Promis in JS is an object that repersent the eventaual completion(or failure) 
// of an asychrnous operation and its resulting values.
function callback1(){
    console.log("Jay Swaminarayan after 3 sec and returns the promise to run the code after completion of time.")
}
setTimeout(callback1,3000) ; // this is also a promises

// how to write real promises
function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
    //retunr object of promis class
}
setTimeoutPromisified(3000).then(callback1);


// how the promis is gone work


function random(resolve) { // resolve is also a function
    setTimeout(resolve, 5000);
}
const p = new Promise(random); // supposed to return u somthing eventually
console.log(p); // this is a promise object


// using the eventual completion of the promis  
function callback() {
    console.log("promise resolved after 5 sec");
}
p.then(callback); 
