type Replace<
  T extends string,
  U extends string,
  V extends string
> = T extends `${infer L}${U}${infer R}` ? `${L}${V}${R}` : T;

type Result = Replace<"Types are fun!", "fun", "awesome">; // "Types are awesome!"

export {};
