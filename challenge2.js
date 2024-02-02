//CHALLENGE#2
const massMark = 78; //มวล [kg.]
const heightMark = 1.69; //ความสูง [m.]
const massJohn = 92;
const heightJohn = 1.95;

//BMI: Body Mass Index 
//Calculation formula => mass / (height * height)
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})!`);
} else {
    //
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})!`)
}