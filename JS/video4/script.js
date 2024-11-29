console.log("Jay swaminarayan");

let a = 10;
let i = 0
for (i = 0; i < a; i++) {
    console.log(i);
}
i = 0;
while (i < a) {
    console.log(i);
    i++;
}
i = 0;
do {
    console.log(i);
    i++;
} while (i < a);

let obj = {
    name: "Jay",
    age: 20,
    isMale: true,
    address: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India"
    }
}
for (const key in obj) {

    const element = obj[key];
    console.log(key, element);
}

let name = "HIl KALATHIYA";

for (const element of name) {
    console.log(element);
}

