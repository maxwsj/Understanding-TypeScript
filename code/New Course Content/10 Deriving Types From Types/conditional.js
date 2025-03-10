"use strict";
let text = 1;
function getFullname(person) {
    if ('firstName' in person &&
        'lastName' in person &&
        person.firstName &&
        person.lastName) {
        return `${person.firstName} ${person.lastName}`;
    }
    throw new Error('No first name and / or last name found.');
}
const name1 = getFullname({});
const name2 = getFullname({ firstName: 'Max', lastName: 'William' });
