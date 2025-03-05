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

///////// Inferred null & a first look at type narrowing

///////// Forced “Not Null” and optional chaining

///////// Type casting

///////// The “unknown” type

///////// Optional values & typescript

///////// Nullish coalescing
