//#Primitive
//  7 types : String, Number, Boolean, null(nothing), undefined, Symbol, BigInt

//is javascript staticallytyped or dynamicallytyped?

const id= Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);//false

// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];//array
//in curly braces in key value pair is object
let myObj = {
    name: "hitesh",
    age: 22,
}
//you can treat fn as avariable
const myFunction = function(){
    console.log("Hello world");
}// type is fn object

console.log(typeof anotherId);
//bigInt typeof is undefined


// https://262.ecma-international.org/5.1/#sec-11.4.3