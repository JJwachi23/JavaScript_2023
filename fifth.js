const age = 20;
if (age === 20) {
    console.log("You just became an adult :D");
}

let num = '5';
if (num === 5) {
    console.log(Boolean(num));
} else {
    console.log("You just became an adult :D");
}

//ternary operator
function getFee(isMember) {
    return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
//Expected output: "$2.00"

console.log(getFee(false));
//Expected output: "$10.00"

console.log(getFee(null));
//Expected output: "$10.00"

const fnum = 18;
const lnum = '18';
if (fnum === 18) {
    console.log("You just became an adult :D (strict)");
};

if (fnum == 18) {
    console.log("You just became an adult :D (loose)");
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number");
} else if (favourite === 9) {
    console.log("9 is also a cool number")
} else {
    console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
    console.log("Why not 23?");
} else if (favourite) {

}