//TEMPLATE LITERAL

let x = 5;
let y = 4;
let result = x + y;
console.log("The addition of " + x + " and " + y + " = " + result)
//another method is
console.log(`The addition of ${x} and ${y} = ${result}`)
//`  ` is used to print the thing in the same way that represents inside the printing statement
console.log(`My name is
Reshmi Mohan`)

//LOOPS

//while {initialize, condition, increment/decrement}
let i = 1;      //initialization
while(i <= 5)   //condition
{
    console.log(`Hello ${i}`);
    i++;            //increment or decrement
}
console.log("While loop exited")


i = 5;
while(i > 0)
{
    console.log("hello " +i)
    i--;
}
console.log("\n")

//do-while
i = 1;
do{
    console.log("Hello " + i)
    i++;
}
while(i <= 5)


//for loop
console.log("\n")
i = 1;
for(i = 1 ; i <= 5 ; i++)
{
    console.log("Hey hello " +i)
}
console.log("Loop has exited")

//pgm to reverse the numb::
x = 784512;     
while(x > 0){
    console.log(x % 10);
    x = parseInt(x / 10);
}