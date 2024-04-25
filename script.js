/*
// Create function in JavaScript
function logger() {
    console.log("My name is JJ");
}

// calling / running /invoking function
logger();


//Create a function type with parameter
function fruitProcessor(apples, orages) {
    console.log(apples, orages);
    const juice = `Juice with ${apples} apples ${orages} orages.`;

    return juice;
}


const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/


/*
//Function declaration
const age1 = calcAge1(2002);
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

//Function expression
// const age2 = calcAge2(1994);
const calcAge2 = function (birthYear) {
    return 2024 - birthYear
}
const age2 = calcAge2(1994);


console.log(age1, age2);
*/

/*
//Arrow function
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(2002, "JJ"));
console.log(yearsUntilRetirement(1994, "PP"));
*/

/*
//Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    //Declare variable named applePrices equal to function cutFruitPieces()
    const applePrices = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePrices} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
//Reviewing functions
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(2002, "JJ"));
console.log(yearsUntilRetirement(1955, "PP"));
*/

// 3 Different function types
/*
// Funcion Declaration
function fname(name) {
    return name;
}
console.log(fname("Wachiraiwt Mool-Ang"));

// Function Expression
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

console.log(calcAge(2002));

//Arrow Function 1
const priceBook = (price) => {
    return `The Book prices ${price}`;
}

console.log(priceBook(199));

//Arrow Function 2 (Destructuring)
const pricePhone = (price) => `The phone is prices ${price}`;
console.log(pricePhone(50000));
*/


/*
function calcAge(birthYear, firstName) {
    const age = 2037 - birthYear;
    console.log(`${firstName} is ${age} years old.`);
    return age;
}

const age = calcAge(1991, "JJ");
console.log(age);
*/


/*
//#Challenge 1
const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
}

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas}) `);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas}) vs ${avgDolphins}`);
    } else {
        console.log("No team wins...");
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
*/

/*
const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
}
// console.log(calcAverage(20, 30, 40));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    } else {
        console.log("No team wins...");
    }
    // return console.log(`Dolphins ${avgDolphins}, Koalas ${avgKoalas}`);
}

checkWinner(scoreDolphins, scoreKoalas);
*/


/*
//Array
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
// console.log(friends[friends.length - 1]);

// const years = new Array(1991, 1984, 2008, 2020);

const firstName = "Wachirawit"
const jj = [firstName, "Mool-Ang", 22, "student", friends]
console.log(jj);
// console.log(jj.length);


//Ex
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
*/

/*
const friends = ["Michael", "Steven", "Peter"];
//Add element in array (last)
const newLength = friends.push("Jay");

console.log(friends);
console.log(newLength);
//Add element in array(first)
friends.unshift("John");
console.log(friends);

//Remove element
const popped = friends.pop("Jay");
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

//In what a element order
console.log(friends.indexOf("Steven"));
//Check the elements in array
console.log(friends.includes("Bob"));
console.log(friends.includes("Peter"));

if (friends.includes("Peter")) {
    console.log("You have a friend called Peter");
}
*/


/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
*/

//Array
// const jjArray = [
//     "firstName",
//     "LastName",
//     22,
//     "Student",
//     ["Michael", "Peter", "Steven"]
// ];


/*
//Object
const jj = {
    firstName: "Wachirawit",
    lastName: "Mool-Ang",
    age: 22,
    job: "Programmer",
    friends: ["Michael", "Peter", "Steven"]
};

console.log(jj);

const lastNameKey = "Mool-Ang";
console.log(jj.firstName + ' ' + lastNameKey);

// const interestedIn = prompt("What do you want to know about JJ? Choose between firstName, lastName, age, job and friends.");
// console.log(interestedIn);

// console.log(jj[interestedIn])

// if (jj[interestedIn]) {
//     console.log(jj[interestedIn]);
// } else {
//     console.log("Wrong request! Choose between firstName, lastName, age, job and friends. ");
// }

jj.localtion = "Thailand";
jj["Facebook"] = "Wachirawit Mool-ang"
console.log(jj);

console.log(`${jj.firstName} has ${jj.friends.length}friends, and his best friend is called ${jj.friends[0]}`);

*/

/*
//Object method
const jj = {
    firstName: "Wachirawit",
    lastName: "Mool-Ang",
    birthYear: 2002,
    job: "Programmer",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear
    // }

    calcAge: function () {
        // console.log(this);
        this.age = 2024 - this.birthYear
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${jj.job}, and he has ${this.hasDriversLicense ? "YES" : "NO"} driver's license.`
    }
};

// console.log(jj.calcAge());
console.log(jj.getSummary());
*/

//Loop in JavaScript
// for (let i = 1; i <= 10; i++) {
//     console.log(`Lifting weights repetition ${i} 🏋🏻`);
// } 

/*
const jj = [
    "Wachirawit",
    "Mool-Ang",
    2024 - 2002,
    "Student",
    ["Michael", "Peter", "Steven"],
    true,
];

const types = [];

for (let i = 0; i < jj.length; i++) {
    // console.log(jj[i], typeof jj[i]);

    // types[i] = typeof jj[i];
    types.push(typeof jj[i]);
}

console.log(types);
*/

/*
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}

console.log(ages);
*/

/*
//continue and break
const jj = [
    "Wachirawit",
    "Mool-Ang",
    2024 - 2002,
    "Student",
    ["Michael", "Peter", "Steven"],
    true,
];

for (let i = 0; i < jj.length; i++) {
    //ตรวจสอบตัวแปร jj ที่อ้างอิงด้วย i เป็นประเภทข้อมูล string หรือไม่ หากไม่ใช่โค้ดจะข้ามไปยังการทำงานถัดไปหรือคำสั่งหลังจาก continue
    //--------หากเงื่อนไขในการใช้ continue เป็นจริงการทำงานจะจบแค่นั้นออกจากการวนซ้ำทันที-------
    if (typeof jj[i] !== "string") continue;

    console.log(jj[i], typeof jj[i]);
};

console.log('-------BREAK WITH NUMBER-------');
for (let i = 0; i < jj.length; i++) {
    if (typeof jj[i] === "number") break;

    console.log(jj[i], typeof jj[i]);
};
*/

const jj = [
    "Wachirawit",
    "Mool-Ang",
    2024 - 2002,
    "Student",
    ["Michael", "Peter", "Steven"],
    true,
];

for (let i = jj.length - 1; i >= 0; i--) {
    console.log(i, jj[i]);
}

