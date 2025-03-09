//////////// Introducing mapped types
type OperationsIntro = {
   add: (a: number, b: number) => number;
   subtract: (a: number, b: number) => number;
};

type ResultsIntro<T> = {
   [Key in keyof T]: number;
};

let mathOperationsIntro: OperationsIntro = {
   add(a: number, b: number) {
      return a + b;
   },
   subtract(a: number, b: number) {
      return a + b;
   },
};

let mathResultsIntro: ResultsIntro<OperationsIntro> = {
   add: mathOperationsIntro.add(1, 2),
   subtract: mathOperationsIntro.subtract(3, 5),
};
//////////// Readonly types & optional mapping

type Operations = {
   add: (a: number, b: number) => number;
   subtract: (a: number, b: number) => number;
};

type Results<T> = {
   readonly [Key in keyof T]-?: number;
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

// mathResults.add = 10;

console.log(mathResults);

// ##### Summary ####
// ✔ ? → Makes all properties optional
// ✔ -? → Makes all properties required
// ✔ readonly → Makes properties immutable
// ✔ -readonly → Makes properties mutable
