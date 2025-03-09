/////////// Extracting Keys with "keyof"
type User = { name: string; age: number };
type UserKeys = keyof User;

let validKey: UserKeys;

validKey = 'age';
