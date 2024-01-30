console.log("hello world!!!")
console.log(2+2)

let num = 85.2
console.log(typeof num)     //to get the type of a variable

let namee = "Reshmi"
console.log(typeof namee)

let hex = 0xff
console.log(hex)

let exp = 1.5e10            //equivalent to 1.5*10^10
console.log(exp)

let inf = 5/0
console.log(inf)        //output will be infinity

let ninf = -5/0
console.log(ninf)       //output will be -infinity

let fName = "Reshmi"
let lName = "Mohan"
let user = 'has a "great voice"'           //to add double quotes in the output
let user2 = "has a \"great voice\""       //to add double quotes in the output
console.log(fName + " " + lName + " " + user)
console.log(fName + " " + lName + " " + user2)

let nameee = "Reshmi \nMohan"
console.log(nameee)

let bool = 5 < 6
let boole = 10 > 12
console.log(bool)
console.log(boole)
console.log(typeof bool)

let nam 
console.log(nam)
let namm = null
console.log(namm)
console.log(typeof namm)

console.log(5 / "Reshmi")
console.log(typeof ((5 / "reshmi")))

let n = String(2)
console.log(n , typeof n)

let s = Number("12345")
console.log(s , typeof s)

let x
console.log(x , typeof x)

let bo = Boolean(7)
console.log(bo)

bo = !bo
console.log(bo , typeof bo)

console.log(Boolean(null))
console.log(Boolean(undefined))

let m = 6
m = m + ""
m = m + 2
console.log(m)
m = +m + 2          //unary operator
console.log(m)

let neww = "123 Reshmi"
console.log(neww)
neww = Number("123 Reshmi")     //if we try to convert combination of numb and string into number it will give NaN
console.log(neww)

neww = parseInt("123 Reshmi")   //ParseInt will extract number from the combination
console.log(neww)               
neww = parseInt("N123 Reshmi")  //for parsing the number should start with number or else NaN
console.log(neww) 