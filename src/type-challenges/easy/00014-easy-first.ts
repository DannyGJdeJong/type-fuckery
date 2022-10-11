type First<T extends any[]> = T extends [infer I, ...any] ? I : never;

type ResultStrings = First<["a", "b", "c"]>; // "a"
type ResultNumbers = First<[3, 2, 1]>; // 3

export {};
