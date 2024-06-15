//singleton
// Object.create

// object literals

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Anil",
    "full name": "Anil Rana",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "anil@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "anil@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "anil@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

