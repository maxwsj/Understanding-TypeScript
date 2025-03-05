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

///////// Nullish coalescing
