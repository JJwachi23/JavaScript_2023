// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// let p1 = new Person("Wachirawit", "Mool-Ang");
// let p2 = new Person("Thanakit", "Mool-Ang");

// console.log("Name:", p1.firstName);
// console.log("Full Name:", p1.getFullName());

// console.log("Name:", p2.firstName);
// console.log("Full Name:", p2.getFullName());
// /************************************************* */

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     getArea() {
//         return this.width * this.height;
//     }

//     draw() {
//         for (let i = 0; i < this.height; i++) {
//             console.log("#".repeat(this.width));
//         }
//     }
// };

// let rect1 = new Rectangle(3, 3);
// let rect2 = new Rectangle(3, 4);

// console.log("Area of rect1:", rect1.getArea());
// console.log("Area of rect2:", rect2.getArea());
// /************************************************* */


class Circle {
    constructor(r) {
        this.radius = r;
        console.log("Circle with radius of %d was created", r);
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    getColor() {
        return this.getColor;
    }
}

let circle = new Circle(5);
console.log("Area:", circle.getArea());
console.log("Circumference:", circle.getCircumference());
