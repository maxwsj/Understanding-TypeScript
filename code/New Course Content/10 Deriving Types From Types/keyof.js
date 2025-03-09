"use strict";
let validKey;
validKey = 'age';
/////////// "keyof" & a more useful example
function getProp(obj, key) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error('Accesing undefined or null value');
    }
    return val;
}
const user = { name: 'Max', age: 35 };
const val = getProp(user, 'age');
const nameValue = getProp(user, 'name'); // ✅ Type inferred as string
const ageValue = getProp(user, 'age'); // ✅ Type inferred as number
