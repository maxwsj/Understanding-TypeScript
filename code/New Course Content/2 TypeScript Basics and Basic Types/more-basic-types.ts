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
type Permission = 'admin' | 'editor' | 'guest';

function access(role: Permission) {}
