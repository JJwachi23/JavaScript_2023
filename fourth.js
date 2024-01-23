// const inputYear = "2002";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("JAY"));
// console.log(typeof NaN);

// console.log(String(23), 23);

//type coercion
// console.log("I'm" + 23 + "years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// 5 falsely values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jay'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all;");
} else {
    console.log("You should get a job!");
}

let height = 12;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

console.log(typeof height);