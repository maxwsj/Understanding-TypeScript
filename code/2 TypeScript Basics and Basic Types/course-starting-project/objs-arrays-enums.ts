const person: {
   name: string;
   age: number;
} = {
   name: 'Max',
   age: 30,
};
console.log(person);

///// Arrays Types
let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Video Games'];

//// Working with Tuples

const cars: {
   name: string;
   quantity: number;
   role: [number, string];
} = {
   name: 'Mercedez',
   quantity: 2,
   role: [0, 'string'],
};

// Working with ENUMs

enum Role {
   ADMIN, // 0
   READ_ONLY, // 1
   AUTHOR, // 2
}

const teacher = {
   role: Role.ADMIN,
};

if (teacher.role === Role.ADMIN) {
   console.log('Admin roles');
}

// The "any" type
