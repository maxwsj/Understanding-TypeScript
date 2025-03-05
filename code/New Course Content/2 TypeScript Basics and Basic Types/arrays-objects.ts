///////// Advanced array types
let users: (string | number)[];

users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Andressa'];

///////// Generic Types - alternative array type declaration
let person: Array<string | number>;

person = [1, 'Max'];
person = [5, 1];
person = ['Max', 'Andressa'];

///////// Tuple types
let possibleResults: [number, number];

///////// Object Types
let user: {
   name: string;
   age: number;
   hobbies: string[]; // Adding an array into this object
   // Adding an nested obj
   role: {
      description: string;
      id: number;
   };
};

///////// Tricky: The "Must Not Be Null" Type

/////////Flexible objects with the record type

/////////Working with Enums

/////////Beign specific with literal types

/////////Types Aliases & custom types

/////////Function return value types

/////////The “void” type

/////////The “never” type

/////////Functions as types

/////////null & undefined - special types

/////////Inferred null & a first look at type narrowing

/////////Forced “Not Null” and optional chaining

/////////Type casting

/////////The “unknown” type

/////////Optional values & typescript

/////////Nullish coalescing
