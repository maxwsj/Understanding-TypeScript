function logger<T extends new (...args: any[]) => any>(
   target: T,
   ctx: ClassDecoratorContext
) {
   console.log('logger decorator');
   console.log(target);
   console.log(ctx);

   return class extends target {
      constructor(...args: any[]) {
         super(...args);
         console.log('class constructor');
         console.log(this);
      }
   };
}

function autobind(
   target: (...args: any[]) => any,
   ctx: ClassMemberDecoratorContext
) {
   ctx.addInitializer(function (this: any) {
      this[ctx.name] = this[ctx.name].bind(this);
   });
}

@logger
class Person {
   name = 'Max';

   @autobind
   greet() {
      console.log('Hi, I am ' + this.name);
   }
}

const max = new Person();

const greet = max.greet;

greet();
