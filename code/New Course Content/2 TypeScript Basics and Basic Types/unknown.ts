///////// The “unknown” type
function process(val: unknown) {
   if (
      typeof val === 'object' &&
      !!val &&
      'log' in val &&
      typeof val.log === 'function'
   ) {
      val.log();
   }
}

///////// Optional values & typescript
function generateError(msg?: string) {
   throw new Error(msg);
}

/// optional properties
type User = {
   name: string;
   age: number;
   role?: 'admin' | 'guest';
};

///////// Nullish coalescing
let input = null;
const didProvideInput = input ?? false;
