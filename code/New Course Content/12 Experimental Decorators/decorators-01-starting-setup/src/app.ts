function Logger(target: Function) {
   console.log('Logging....');
   console.log(target);
}

@Logger
class Person {
   name = 'Max';

   constructor() {
      console.log('Creating person object....');
   }
}

const pers = new Person();

console.log(pers);
