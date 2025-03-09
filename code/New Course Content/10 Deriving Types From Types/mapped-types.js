"use strict";
let mathOperationsIntro = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a + b;
    },
};
let mathResultsIntro = {
    add: mathOperationsIntro.add(1, 2),
    subtract: mathOperationsIntro.subtract(3, 5),
};
let mathOperations = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a + b;
    },
};
let mathResults = {
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
//////////// Exploring template literal types
//////////// Introducing conditional types
//////////// Conditional types - another example
//////////// Making sense of the “infer” leyword
//////////// Typescript’s got you covered: built-in utility types
