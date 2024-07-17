// let x
// random = Math.floor(Math.random() * 100)

// let a = 15
// let b = 10

// if (random <= 65) {
//     console.log(`${a}+${b} :`, (a + b));
//     console.log(`${a}*${b} :`, (a * b));
//     console.log(`${a}-${b} :`, (a - b));
//     console.log(`${a}/${b} :`, (a / b));
//     console.log(`${a}**${b} :`, (a ** b));
// }
// else {
//     console.log(`${a}+${b} :`, (a - b));
//     console.log(`${a}*${b} :`, a + b);
//     console.log(`${a}-${b} :`, (a / b));
//     console.log(`${a}/${b} :`, (a ** b));
//     console.log(`${a}**${b} :`, (a * b));
// }

let random = Math.floor(Math.random() * 10);

let a = prompt("Enter the First Number:", 0);
let b = prompt("Enter the Second Number:", 0);
let c = prompt("Enter the Opration:");

let obj = {
    "+": "-",
    "-": "/",
    "/": "**",
    "**": "*"
}

if (random < 7) {
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}  // here eval is evaluating argument which is given in the eval
else {
    c = obj[c];
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}