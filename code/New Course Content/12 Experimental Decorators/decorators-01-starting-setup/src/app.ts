function Logger(logString: string) {
   return function name(constructor: Function) {
      console.log(logString);
      console.log(constructor);
   };
}

@Logger('LOGGIN - PERSON')
class Person {
   name = 'Max';

   constructor() {
      console.log('Creating person object....');
   }
}
