// Primitive data type
// 7 Types of categories: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2345432345543n



// Reference(Non Primitive)

// Array, Objects, Functions

const names = ["anil", "ankit", "anish"];
let myObj = {
    name: "anil",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof scoreValue);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++

// Memories

// Stack (Primitive), Heap (Non-Premitive)

let myName = "Anil"

let anotherName = myName
anotherName = "Rahul"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = " anil@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);
 

