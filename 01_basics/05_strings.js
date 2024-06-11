const name = "Anil"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('anil-rana');

console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); //find the character through the index number
console.log(gameName.indexOf('l')); //find the character index number

//how to divide into substring 
const newString = gameName.substring(0, 3)
console.log(newString);

//How to use slice method in negative values
const anotherString = gameName.slice(-2, 4)
console.log(anotherString);

//How to use trim mthod in string, The trim() method in JavaScript is used to remove whitespace from both ends of a string. Whitespace includes spaces, tabs, and newlines.

const newStringOne = "   Anil    "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace() method in JavaScript is used to replace a specified value with another value in a string. It's particularly useful for replacing substrings within a string.

const url = "https://anil.com/anil%40rana"

console.log(url.replace('%40', '-'))

console.log(url.includes('abhi'));