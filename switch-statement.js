// switch statement
const day = "saturday";

switch (day) {
    case "monday":  //day === "monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day!");
}



// conditoin if, else if, else
if (day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday") {
    console.log("Record videos");
} else if (day === "saturday") {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a valid day!");
}