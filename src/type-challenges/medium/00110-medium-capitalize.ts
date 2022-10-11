type Capitalize<T extends string> = T extends `${infer U}${infer V}`
  ? `${Uppercase<U>}${V}`
  : never;

type Result = Capitalize<"hello world">; // "Hello world"

export {};
