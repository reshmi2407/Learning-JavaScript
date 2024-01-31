//CONDITIONAL STATEMENTS
//semicoln is not necessary in js; it's our choice
//if - else if - else
let x = 3;
let y = 4;
let result = y > x;
if (result) {     //if result is true
    console.log("y is greater");    //for a single statment inside if loop, no need to add {  } 
}
else {                               //{  } can be used for execute bunch of statements inside if loop
    console.log("x is greater");
}
console.log("if loop exited");


x = 6;
y = 4;
z = 7;
if (x > y && x > y) {
    console.log("x is greater");
}
else if (y > x && y > z) {
    console.log("y is greater");
}
else {
    console.log("z is greater")
}
console.log("if loop exited");

x = 5;
if (x % 2 === 0) {
    console.log("x is even")
}
else {
    console.log("x is odd")
}

//ternary operator
result = x % 2 === 0 ? "Even" : "Odd"
console.log(result)

//switch statements
//mon - 7am
//tue - thurs - 4am
//fri - 9am
//sat - sun - 8am
let day = "Mon"
switch (day) {
    case "Mon":
        console.log("wake up at 7am")
        break;
    case "Tue":
        console.log("wake up at 4am")
        break;
    case "Wed":
        console.log("wake up at 4am")
        break;
    case "Thurs":
        console.log("wake up at 4am")
        break;
    case "Fri":
        console.log("wake up at 9am")
        break;
    case "Sat":
        console.log("wake up at 8am")
        break;
    case "Sun":
        console.log("wake up at 8am")
        break;
    default:
        console.log("please wake up early")
        break;
}


day = "Wed"
switch (day) {
    case "Mon":
        console.log("wake up at 7am")
        break;
    case "Tue":                     //we can do like this if the printing statements are same
    case "Wed":
    case "Thurs":
        console.log("wake up at 4am")
        break;
    case "Fri":
        console.log("wake up at 9am")
        break;
    case "Sat":
    case "Sun":
        console.log("wake up at 8am")
        break;
    default:
        console.log("please wake up early")
        break;
}