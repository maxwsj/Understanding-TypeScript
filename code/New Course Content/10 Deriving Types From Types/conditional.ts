//////// Introducing conditional types
type StringArray = string[];

let text = 1;

type GetElementType<T> = T extends any[] ? T[number] : never;

type Example1 = GetElementType<StringArray>;
type Example2 = GetElementType<typeof text>;

//////////// Conditional types - another example

type FullnamePerson = { firstName: string; lastName: string };
type FullnameOrNothing<T> = T extends FullnamePerson ? string : never;

function getFullname<T extends object>(person: T): FullnameOrNothing<T> {
   if (
      'firstName' in person &&
      'lastName' in person &&
      person.firstName &&
      person.lastName
   ) {
      return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>;
   }

   throw new Error('No first name and / or last name found.');
}

const name1 = getFullname({});
const name2 = getFullname({ firstName: 'Max', lastName: 'William' });

//////////// Making sense of the “infer” leyword

//////////// Typescript’s got you covered: built-in utility types
