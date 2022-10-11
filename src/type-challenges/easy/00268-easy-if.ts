type If<C extends boolean, T, F> = C extends true ? T : F;

type ResultA = If<true, "a", "b">; // "a"
type ResultB = If<false, "a", "b">; // "b"

export {};
