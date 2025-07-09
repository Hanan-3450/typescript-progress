let id: number = 5; // to add a type we use 'number' here

let company: string = "progress";
let isPublished: boolean = true;
let x: any = "Hey";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hi"];

//Tuple
let person: [number, string, boolean] = [1, "me", true];

//Tuple array
let employee: [number, string][];

employee = [
  [1, "mom"],
  [2, "baba"],
  [3, "me"],
];

//Union
let pid: string | number;
pid = "21";

//Enum
enum Direction2 {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction2.Left);

//objects

type user = {
  id: number;
  name: string;
};
const user: user = {
  id: 1,
  name: "Han",
};

//Type Assertion

let cid: any = 1;
//let customerId= <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}
//another way :-
//we can disable  this // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
// but giving the type is a good idea

console.log(addNum(1, 2));

function log(message: string | number) {
  console.log(message);
}

//Interfaces : custom  user type
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}
const user1: UserInterface = {
  id: 1,
  name: "han",
};
user1.id = 5; // you can use read only or optional property

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

//Classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "suhan", "Developer");

//console.log(emp,register())

//Generics.....

function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["han", "mom", "baba"]);

//numArray.push('hello')
strArray.push(1);
