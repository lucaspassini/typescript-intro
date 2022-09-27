// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 22;

let username: string = 'Lucas';

let isInstructor: boolean = false;

// More complex types

let hobbies: string[] = ['1', '2', '3'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Lucas',
  age: 22
};

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';

// Function & types

function sum(a: number, b: number) {
  return a + b;
}

function insertPrint(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
