// Union Types
function combine(
   input1: number | string,
   input2: number | string,
   resultConverion: string
) {
   let result;
   if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
   } else {
      result = input1.toString() + input2.toString();
   }
   return result;
}

const combinedAges = combine(30, 26, 'as-number');
const combinedNames = combine('Max', 'William', 'as-string');

console.log(combinedAges);
console.log(combinedNames);

// Literal Types

function combining(
   input1: number | string,
   input2: number | string,
   resultConversion: string
) {
   let result;
   if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
   } else {
      result = input1.toString() + input2.toString();
   }
   if (resultConversion === 'as-number') {
      return +result;
   } else {
      return result.toString();
   }
}

const combinedAge = combining(30, 26, 'as-number');
const combinedName = combining('Max', 'William', 'as-string');
const combinedNumber = combining('30', '20', 'as-string');

console.log(combinedAge);
console.log(combinedName);
console.log(combinedNumber);
