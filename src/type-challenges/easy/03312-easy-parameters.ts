type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never;

type Result = MyParameters<(a: string, b: number) => void>; // [a: string, b: number]

export {};
