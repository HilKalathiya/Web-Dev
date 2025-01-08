let adj = {
    0 : "Crazy",
    1 : "Amazing",
    2 : "Fire"
}

let name = {
    0 : "Engine",
    1 : "Foods",
    2 : "Garments"
}

let other = {
    0 : "Pvt. Ltd.",
    1 : "Bros.",
    2 : "Limited"
}   
let a = Math.floor((Math.random() * 10) / 4 );
let b = Math.floor((Math.random() * 10) / 4);
let c = Math.floor((Math.random() * 10) / 4);
console.log(`${adj[a]} ${name[b]} ${other[c]}`);
console.log(a,b,c)