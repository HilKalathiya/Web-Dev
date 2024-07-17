console.log("Jay Swaminarayan")
// for know what in this please check out JS notes

let boxes = document.getElementsByClassName("box");
console.log(boxes)
boxes[2].style.backgroundColor = "lime"; // ama tha avu ke mare jo koi particular element ne kai karvu hoy ane teni index badlay to vadho pade

document.getElementById("che").style.backgroundColor = "green"; // aa che vadhu saru id par j kam kare che

document.querySelector(".box").style.backgroundColor = "blue"; // aa koi pan class ma first element par lagu pade


// querySelectorAll che te apanne "Html Collection" ape che tene apde for loop thi style karvu pade che

console.log(document.querySelectorAll(".box")) //aa list provide kare che tene for loop this styke karvani thase

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "lime";
});

// have che get elements by tag name like div che table che etc...

console.log(document.getElementsByTagName("div"))

//ek biju ave get selector by matches
e = document.getElementsByTagName("div");

console.log(e[4].matches("#che"))
console.log(e[3].matches("#che"))


console.log(e[4].closest("html"))  // aama ahi closest ma andar lakhela ne maltu tena parents ni pase hoy to tya thi melavshe
console.log(e[4].closest(".container"))


console.log(document.querySelector(".container").contains(e[4])) // contains ma jo te element ne a rakhatu hoy ke khud hoy to true nahi tar false

console.log(document.querySelector(".container").contains(document.body));