type Last<T extends any[]> = T extends [...infer V, infer _] ? V : never;

type Result = Last<["a", "b", "c"]>; // ["a", "b"]

export {};
