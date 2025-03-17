function logger(target: any, ctx: ClassDecoratorContext) {
   console.log('logger decorator');
   console.log(target);
   console.log(ctx);
}

@logger
class Person {
   name = 'Max';

   greet() {
      console.log('Hi, I am' + this.name);
   }
}
