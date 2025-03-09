//////////// Introducing mapped types
type Operations = {
   add: (a: number, b: number) => number;
   subtract: (a: number, b: number) => number;
};

type Results<T> = {
   [Key in keyof T]: number;
};

let mathOperations: Operations = {
   add(a: number, b: number) {
      return a + b;
   },
   subtract(a: number, b: number) {
      return a + b;
   },
};

let mathResults: Results<Operations> = {
   add: mathOperations.add(1, 2),
   subtract: mathOperations.subtract(3, 5),
};
//////////// Readonly types & optional mapping

//////////// Exploring template literal types

//////////// Introducing conditional types

//////////// Conditional types - another example

//////////// Making sense of the “infer” leyword

//////////// Typescript’s got you covered: built-in utility types
