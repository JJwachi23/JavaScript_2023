//Challenge #3
//BMI = mass / (height * height)

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

console.log(mark.calcBMI().toFixed(2));
console.log(john.calcBMI().toFixed(2));

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi.toFixed(2)} is higher than ${john.fullName}'s ${john.bmi.toFixed(2)}!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI ${john.bmi.toFixed(2)} is higher than ${mark.fullName}'s ${mark.bmi.toFixed(2)}!`);
};