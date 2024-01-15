const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJOHN = massJohn / (heightJohn * heightJohn);
const markingHigherBMI = BMIMark > BMIJOHN;

console.log(BMIMark, BMIJOHN, markingHigherBMI);
