//Primitive types
let age: number = 10;

age = 12;

let userName: string = "Max";

let isInstructor: boolean = true;

//Complex types

let hobbies: string[];

let ages: number[];

let person: {
  name: string;
  age: number;
};

let people: {
  name: string;
  age: number;
}[];

//Function types
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

//Type inference

let course = "React - The Complete Guide";

// this doesnt work because it infers the type
//course = 12341

//Union types
let teachers: string | number;

//Type alias
type Pet = {
  species: string;
  name: string;
  age: number;
};

let cat: Pet;

let dogs: Pet[];

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
