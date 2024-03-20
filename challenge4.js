// ternary condition
const bill = 275;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `);

// condition if else
const reward = 400;
let bonus;
if (reward >= 50 && reward <= 300) {
    bonus = reward * 0.15;
} else {
    bonus = reward * 0.2;
}

console.log(`The bill was ${reward}, the tip was ${bonus}, and the total value ${reward + bonus} `);
