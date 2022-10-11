type Last<T extends any[]> = T extends [...infer _, infer V] ? V : never;

type Result = Last<["a", "b", "c"]>; // "c"

export {};
