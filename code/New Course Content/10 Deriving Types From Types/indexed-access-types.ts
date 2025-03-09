/////////////// Understanding Indexed Access Types

const appUser = {
   name: 'Max',
   age: 27,
   permissions: [{ id: 'p1', title: 'Admin', descirption: 'Admin access' }],
};

type AppUser = typeof appUser;

type AppUsers = {
   name: string;
   age: number;
   permissions: {
      id: string;
      title: string;
      description: string;
   }[];
};

type Perms = AppUser['permissions']; // This automatically extracts the type of the permissions property.
