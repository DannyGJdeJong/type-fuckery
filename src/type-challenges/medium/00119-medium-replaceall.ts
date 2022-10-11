type ReplaceAll<
  T extends string,
  U extends string,
  V extends string
> = T extends `${infer L}${U}${infer R}` ? ReplaceAll<`${L}${V}${R}`, U, V> : T;

type Result = ReplaceAll<"T y p e s", " ", "">; // "Types"

export {};
