

//Declare a greeting and assign it to a phrase

let greeting = "Welcome to Hackbright!";

greeting.split("");

let greet_join= greeting.split("").join("");


let arr = [4, 5, 7, 2, 6];

let idx = Math.floor(Math.random() * (arr.length)); 
let idx2 = Math.floor(Math.random() * (arr.length));
let temp = arr[idx];
arr[idx] = arr[idx2];
arr[idx2] = temp;


let candy = new Map();
candy.set('purple', 'grape');
candy.set('orange','tangerine');
candy.set('red', 'strawberry');
candy.set('blue', 'blueberry');
candy.set('yellow', 'banana');

for (let color of candy) {
    console.log(`The ${color[1]} flavor is colored ${color[0]}.`);
}

function colorFlavor(color, candy) {
    if (candy.has(color)) {
        return candy.get(color);
    } else {
        console.log("Sorry, that color doesn't have a flavor.");
    }
}


function colArrflavArr(colorArray, candy) {
    let flavorArr = [];
    for (let color of colorArray) {
        let flavor = candy.get(color);
        if (flavor === undefined) {
            flavor = null;
        }
        flavorArr.push(flavor);
    } 
    return flavorArr;
}