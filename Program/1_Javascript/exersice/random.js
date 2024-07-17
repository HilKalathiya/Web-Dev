console.log("script.js initialization");
let boxes = document.getElementsByClassName("box");
function getRandomColor() {
    let r1 = Math.floor(Math.random() * 255);
    let r2 = Math.floor(Math.random() * 255);
    let r3 = Math.floor(Math.random() * 255);
    return `rgb(${r1}, ${r2}, ${r3})`
}


Array.from(boxes).forEach(e => {
    e.style.color = getRandomColor();
    e.style.backgroundColor = getRandomColor();
    e.style.borderColor = getRandomColor();
});

