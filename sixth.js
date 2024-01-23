// == equal to === equal value or equal type
const fnum = "18";
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
// != not equal !== not equal value or not equal type
if (favourite !== 23) {
    console.log("Why not 23?");
} else if (favourite) {

}