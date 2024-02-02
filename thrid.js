const age = 21;
if (age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);






// //CHALLENGE#2
// const massMark = 78; //มวล [kg.]
// const heightMark = 1.69; //ความสูง [m.]
// const massJohn = 92;
// const heightJohn = 1.95;

// //BMI: Body Mass Index
// //Calculation formula => mass / (height * height)
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);


// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is higher than John's!");
//     console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})!`);
// } else {
//     //
//     console.log("John's BMI is higher than Mark's!");
//     console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})!`)
// }

