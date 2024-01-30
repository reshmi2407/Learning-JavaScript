//ARITHMETIC OPERATORS

let num1 = true
let num2 = true
let result = num1 + num2
console.log(result)

let num3 = 4
num3 += 1
console.log(num3)

let num4 = 5
++num4      //pre increment
console.log(num4)

num4++      //post increment
console.log(num4)

let num5 = 2
x = num5++
console.log(x , num5)
y = ++num5
console.log(y , num5)

let num6 = 4
let rresult = Math.pow(4 , 3)       //math is a class, pow is a method and this means 4^3
console.log(rresult)            //also ** is used to find the square

//RELATIONAL OPERATOR {< > <= >= != ==}

 x = "Pen"
 y = "Book"
let Resultt = x > y     //comparison of strings are based on their ASCII values
console.log(Resultt)

y = "Pencil"
Resultt = x > y     // comparison is based on the weight of ASCII value
console.log(Resultt)

x = "2"
y = 6
result = x < y      //here the string is converted into number automatically
console.log(result)

x = "3"
y = 3
result = x == y     //conversion of string to number may happen very quickly in js since js is a loosely typed language
console.log(result) // js can easily get type conversion and type coercion
//if we want something is == to other thing we have to say that its value and type should be equal.
//for processing the right equivalence we use === instead == in js
result = x === y
console.log(result)

x = ""      //its value is false
y = false
result = x == y
console.log(result)

result = x === y
console.log(result)

//LOGICAL OPERATORS {&& || !}
//& is a bitwise operator

 x = 2 , y = 4
 let z = 0
result = x > y && y < z
console.log(result)

result = x > y || y < z
console.log(result)

