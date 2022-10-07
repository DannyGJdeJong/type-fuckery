// Expand this with needed type translations
type NativeTypes = {
  bool: boolean;
  boolean: boolean;
  int: number;
  number: number;
  string: string;
};

type Length<T extends Array<any>> = T extends { length: infer L } ? L : never;

type BuildTypedTuple<
  L extends number,
  T,
  R extends Array<T> = []
> = L extends Length<R> ? R : BuildTypedTuple<L, T, [...R, T]>;

/**
 * Converts a string like "string[3]" or "bool[5]" as seen in other languages to a TypeScript tuple type of the specified length.
 */
type FixedLengthTypeStringToTuple<S extends string> =
  S extends `${infer T extends keyof NativeTypes}[${infer L extends number}]`
    ? BuildTypedTuple<L, NativeTypes[T]>
    : never;

type String3 = FixedLengthTypeStringToTuple<"string[3]">; // [string, string, string]
type Bool5 = FixedLengthTypeStringToTuple<"bool[5]">; // [boolean, boolean, boolean, boolean, boolean]
type Foo2 = FixedLengthTypeStringToTuple<"foo[2]">; // never

export {};
