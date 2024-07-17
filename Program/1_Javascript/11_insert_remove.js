console.log(document.querySelector(".box"));
console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".box").innerText);
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".box").outerHTML);
console.log(document.querySelector(".container").outerHTML);
// outer html ma apn ne je container che te khud ane teni ander nu banne male che 
//inner html ma khali te container ni ander nu j male che
console.log(document.querySelector(".box").tagName);
console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);
// ane nord ane tag name na vishe vadhu janva mate notes jovo
console.log(document.querySelector(".box").textContent);
let e = document.getElementsByClassName("box");
console.log(e[1].hidden = true);

console.log(e[0].innerHTML = "hey i am hil kalathiya");
console.log(e[0].hasAttribute("class"));
console.log(e[0].getAttribute("style"));
console.log(e[0].setAttribute("style", "display: inline"));
console.log(e[0].attributes);
console.log(e[0].removeAttribute("controls"));
console.log(e[0].attributes); //you see
console.log(document.designMode = "on"); //you see ana thi desiner mode on thay koi pan webpage ma
console.log(document.designMode = "off");

console.log(e[0].dataset);

let d = document.createElement("div");
d.innerHTML = "hi i am chetan ghadhiya <b>hil kalathiya</b>";
console.log(d.innerHTML);
d.setAttribute("class", "created");
document.querySelector(".container").append(d); //chelle add karine apse
document.querySelector(".container").prepend(d); //sharu ma add karine apse
document.querySelector(".container").before(d); //container class ni pahela mukshe ane
document.querySelector(".container").after(d); //container class ni pachi mukshe ane
e[2].replaceWith(d); //ahi d che te ne e[2] ni jaga par replace kari didho che

// document.querySelector(".container").insertAdjacentHTML("afterend","<b>hello i am under the water, here to much rain, wooooooooo</b>"); // aa container pate pachi insert thay
// document.querySelector(".container").insertAdjacentHTML("beforeend","<b>hello i am under the water, here to much rain, wooooooooo</b>"); // aa container pate pahela end ma insert thay
document.querySelector(".container").insertAdjacentHTML("beforebegin", "<b> hello i am hil under the water, here to much rain, wooooooooo </b>"); // aa container begain thay pahela insert thay
document.querySelector(".container").insertAdjacentHTML("afterbegin", "<b> hello i am hil under the water, here to much rain, wooooooooo </b>"); // aa container begain thay pachi start ma insert thay



// insertAdjacentHTMl ni jem Text and Element lakhi skaiye chavi


console.log(e[1].remove());
console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className); //class = ma je lakhelu che te apiyu che
console.log(document.querySelector(".container").classList.add("Hil"));
console.log(document.querySelector(".container").classList.remove("Hil"));
console.log(document.querySelector(".container").classList.remove("red"));
console.log(document.querySelector(".container").classList.add("blue"));
console.log(document.querySelector(".container").classList.toggle("red")); //this will do if class is there then it will remove and if it is not the it will add
console.log(document.querySelector(".container").classList.toggle("red")); //this will do if class is there then it will remove and if it is not the it will add



