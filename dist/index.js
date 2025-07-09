"use strict";
let id = 5; // to add a type we use 'number' here
let company = "progress";
let isPublished = true;
let x = "Hey";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hi"];
//Tuple
let person = [1, "me", true];
//Tuple array
let employee;
employee = [
    [1, "mom"],
    [2, "baba"],
    [3, "me"],
];
//Union
let pid;
pid = "21";
//Enum
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 0] = "Up";
    Direction2[Direction2["Down"] = 1] = "Down";
    Direction2[Direction2["Left"] = 2] = "Left";
    Direction2[Direction2["Right"] = 3] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
const user = {
    id: 1,
    name: "Han",
};
//Type Assertion
let cid = 1;
//let customerId= <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
//another way :-
//we can disable  this // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
// but giving the type is a good idea
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "han",
};
user1.id = 5; // you can use read only or optional property
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const han = new Person(1, "Han M");
const little = new Person(2, "Little sister");
console.log(han);
console.log(han, little);
// public,private and protected
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "suhan", "Developer");
//console.log(emp,register())
//Generics.....
