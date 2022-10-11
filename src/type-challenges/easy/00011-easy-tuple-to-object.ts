type TupleToObject<T extends any[]> = {
  [K in T[number]]: K;
};

type Result = TupleToObject<["a", "b", "c", "d", "e"]>; // { a: "a", b: "b", c: "c", d: "d", e: "e" }

export {};
