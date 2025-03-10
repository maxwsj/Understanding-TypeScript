//////// Introducing conditional types
type StringArray = string[];

let text = 1;

type GetElementType<T> = T extends any[] ? T[number] : never;

type Example1 = GetElementType<StringArray>;
type Example2 = GetElementType<typeof text>;

//////////// Conditional types - another example

//////////// Making sense of the “infer” leyword

//////////// Typescript’s got you covered: built-in utility types
