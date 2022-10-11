type Trim<T extends string> = T extends ` ${infer U}`
  ? Trim<U>
  : T extends `${infer U} `
  ? Trim<U>
  : T;

type Result = Trim<"  Hello World  ">; // "Hello World"

export {};
