const user = {
    username: "anil",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "aham"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "anil"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "anil"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "anil"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "anil"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()