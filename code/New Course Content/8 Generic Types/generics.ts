////////////////// Creating and using a generic type

let names: Array<string> = ['Max', 'Anna'];

type DataStore<T> = {
   [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = 'Max';
store.isInstructor = true;

console.log(store);

////////////////// Generic functions and interface
function merge<T>(a: T, b: T) {
   return [a, b];
}

const ids = merge<number>(1, 2);

////////////////// Working with multiple generic parameters
function meet<T, U>(a: T, b: U) {
   return [a, b];
}

const tse = meet<number, string>(1, '2');

////////////////// Generics & constraints
function mergeObj<T extends object>(a: T, b: T) {
   return { ...a, ...b };
}

const merged = mergeObj({ userName: 'Max' }, { lastName: 'William' });

////////////////// Constraints & multiple generic types
function mergeObject<T extends object, U extends object>(a: T, b: U) {
   return { ...a, ...b };
}

const mergedd = mergeObject({ userName: 'Max' }, { age: 33 });

////////////////// Working with generic classes & interfaces
class User<T> {
   constructor(public id: T) {}
}

const user = new User('i1');
