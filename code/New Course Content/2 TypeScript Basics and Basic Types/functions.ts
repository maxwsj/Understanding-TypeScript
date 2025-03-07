///////// Function return value types
function add(a: number, b: number): number {
   return a + b;
}

///////// The “void” type
function log(message: string) {
   console.log(message);
}

///////// The “never” type
function logAndThrow(errorMessage: string): never {
   console.log(errorMessage);
   throw new Error(errorMessage);
}

///////// Functions as types
function performJob(cb: (st: string) => string) {
   cb('1');
}

///////// null & undefined - special types
let a: null | string;

///////// Inferred null & a first look at type narrowing
const inputEl = document.getElementById('user-name');

if (!inputEl) {
   throw new Error('Element not found!');
}

console.log(inputEl.value);

///////// Forced “Not Null” and optional chaining
const inputEle = document.getElementById('user-name')!;

console.log(inputEl?.value);

///////// Type casting
const inputE = document.getElementById('user-name') as HTMLInputElement | null;
