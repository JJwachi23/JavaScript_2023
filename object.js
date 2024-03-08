// const Rabbit = (name, breed, color, weight) => {
//     this.name = name;
//     this.breed = breed;
//     this.color = color;
//     this.weight = weight
// }

// let rabbit1 = Rabbit('Mimi', 'Lion Head', 'White', 1.5);

// let rabbit2 = new Rabbit('Momo', 'Netherland Dwarf', 'Brown', 1.2);

// console.log(rabbit1);
// console.log(rabbit2);

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

let p1 = new Person("Wachirawit", "Mool-Ang");
let p2 = new Person("Thanakit", "Mool-Ang");

console.log("Name:", p1.firstName);
console.log("Full Name:", p1.getFullName());

console.log("Name:", p2.firstName);
console.log("Full Name:", p2.getFullName());