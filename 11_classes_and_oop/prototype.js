// let myName = webtech     "
// let mychannel = "nil     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.webtech = function(){
    console.log(`webtech is present in all objects`);
}

Array.prototype.heyAnil = function(){
    console.log(`Anil says hello`);
}

// heroPower.webtech()
// myHeros.webtech()
// myHeros.heyAnil()
// heroPower.heyAnil()

// inheritance

const User = {
    name: "weebtech",
    email: "webtech@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "webtechNil     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()