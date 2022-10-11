type TupleToUnion<T extends any[]> = T extends Array<infer U> ? U : never;

type Result = TupleToUnion<["a", "b", "c"]>; // "a" | "b" | "c"

export {};
