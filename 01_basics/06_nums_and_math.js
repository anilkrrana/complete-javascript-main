// const score = 400
// console.log(score);

const balance = new Number(1002)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //tofixed means 1002.00


// toPrecision() is a method used to format a number to a specified precision (number of significant digits).

// Here's how you can use it:
const otherNumber = 123.8790

console.log(otherNumber.toPrecision(3));


// The toLocaleString() method in JavaScript is used to format numbers, dates, and currencies according to the locale of the user. It returns a string representing the number, date, or currency formatted according to the conventions of the user's locale.
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++Maths+++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //Math.abs() returns the absolute value of -10, which is 10.
console.log(Math.round(9.6)); //Math.round(9.6) returns 10 because 9.6 is closer to 10 than to 9 when rounded to the nearest integer.
console.log(Math.ceil(9.5));
console.log(Math.floor(9.6));
console.log(Math.min(4,3,2,8));
console.log(Math.max(4,3,8,5));

console.log(Math.random()); //The Math.random() function in JavaScript returns a floating-point, pseudo-random number in the range from 0 inclusive up to but not including 1. It means it can generate values from 0 up to, but not including, 1.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 20
const max = 40

console.log(Math.floor(Math.random() * (max-min+1)) + min)
