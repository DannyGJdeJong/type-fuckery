type TrimLeft<T extends string> = T extends ` ${infer U}` ? TrimLeft<U> : T;

type Result = TrimLeft<"  Hello World  ">; // "Hello World  "

export {};
