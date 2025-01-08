console.log("Jay swaminarayan");

function add(a,b){
    return a+b;
}

let c =add(10,15);
console.log(c);

function multi(a,b,c = 3){
    console.log(a*b*c);
}

multi(2,3,4);
multi(2,3);
multi(2); // it give us Nan coz b is undifined


let func = (a,b) =>{
    console.log(a**b);
}

func(5,3);
