//OBJECTS
let alien = {}      //inside this { } we include collection of properties of the objects
console.log(alien , typeof alien);

alien = {
    name : "Reshmi Mohan" ,
    Age : 23 ,
    Status : "Single" ,
    'work exp' : 4      //to words can be used by including them in a '...'

}
console.log(alien);
console.log(alien.name);     //to fetch any value of a property of an object
console.log(alien['Age']);   //this ['...'] is also use to fetch value 
console.log(alien['work exp']);

let input = "name";
console.log(alien[input]);   //for fetching users input we cant use . or ['...']


//COMPLEX OBJECTS
console.log("\n");
alien = {
    Name : "Reshmi Mohan" ,
    Age : 23 ,
    Status : "Single" ,
    Laptop : {
        CPU : "i5" ,
        Brand : "HP" ,
        RAM : 4
    }
}
console.log(alien.Laptop);
console.log(alien.Laptop.Brand);
console.log(alien.Laptop.Brand.length);     //to find the length of the brand

console.log('\n')
//to get all the keys in an object
for(let key in alien){
    console.log(key)
}
console.log("\n")

//to get key value pair of an object
for(key in alien){
    console.log(key, alien[key]); // to get the key value pair in an object
}

console.log("\n")

//to fetch all key value pair in the Laptop property
for(key in alien.Laptop){
    console.log(key , alien.Laptop[key])
}
console.log("\n")

//delete is a keyword used to delete any feature from an object
delete alien.Laptop
console.log(alien);

