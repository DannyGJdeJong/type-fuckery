type Length<T extends any[]> = T extends { length: infer L } ? L : never;

type ResultStrings = Length<["a", "b", "c", "d"]>; // 4
type ResultNumbers = Length<[1, 2, 3, 4, 5]>; // 5

export {};
