const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins.toFixed(2), scoreKoalas.toFixed(2));

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy🏆");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy🏆");
} else if (scoreDolphins == scoreKoalas) {
    console.log("Both win the trophy🏆");
}

//BONUS 1
const scorePandas = (97 + 112 + 81) / 3;
const scoreGiraffes = (109 + 95 + 86) / 3;
console.log(scorePandas.toFixed(2), scoreGiraffes.toFixed(2));

if (scorePandas > scoreGiraffes && scorePandas >= 100) {
    console.log("Dolphins win the trophy🏆");
} else if (scoreGiraffes > scorePandas && scoreGiraffes >= 100) {
    console.log("Koalas win the trophy🏆");
} else if (scorePandas == scoreGiraffes && scorePandas >= 100 && scoreGiraffes >= 100) {
    console.log("Both win the trophy🏆");
} else {
    console.log("No one wins the trophy🥲");
}

//function toFixed() in JavaScript it's mean a number convert to string.
// let number = 3.1456;
// let fixedPoint = number.toFixed(3);
// console.log(typeof fixedPoint);

// let numberSecound = 5 & 2; // 0101 & 0010 = 0000
// console.log(numberSecound);

