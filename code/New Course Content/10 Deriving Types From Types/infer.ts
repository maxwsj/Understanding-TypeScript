//////////// Making sense of the “infer” leyword
function add(a: number, b: number) {
   return a + b;
}

function addStr(a: string, b: string) {
   return a + b;
}

type AddFn = typeof add;
type AddFnStr = typeof addStr;
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;

type AddFnReturnValueType = ReturnValueType<AddFn>;
type AddFnStrFnReturnValueType = ReturnValueType<AddFnStr>;

//////////// Typescript’s got you covered: built-in utility types
