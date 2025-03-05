///////// Working with Enums
enum Role {
   Admin,
   Editor,
   Guest,
}

let userRole: Role = Role.Admin;

let userR: Role = 2;

///////// Being specific with literal types
let userT: 'admin' | 'editor' | 'guest' = 'admin';

userT = 'guest';

///////// Types Aliases & custom types

///////// Function return value types

///////// The “void” type

///////// The “never” type

///////// Functions as types

///////// null & undefined - special types

///////// Inferred null & a first look at type narrowing

///////// Forced “Not Null” and optional chaining

///////// Type casting

///////// The “unknown” type

///////// Optional values & typescript

///////// Nullish coalescing
