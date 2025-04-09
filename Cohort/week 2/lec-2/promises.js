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
//it is promise us that i will return you value in future

