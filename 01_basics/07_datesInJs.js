//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 5, 28)
// let myCreatedDate = new Date(2024, 5, 24, 5, 3)
// let myCreatedDate = new Date("2024-06-11")
let myCreatedDate = new Date("04-14-2024")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);


`${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    calendar: "long"
})