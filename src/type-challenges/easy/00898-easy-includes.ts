type Includes<T extends any[], U> = T extends Array<infer V>
  ? U extends V
    ? true
    : false
  : never;

type ResultTrue = Includes<["a", "b", "c"], "b">; // true
type ResultFalse = Includes<["a", "b", "c"], "d">; // false

export {};
