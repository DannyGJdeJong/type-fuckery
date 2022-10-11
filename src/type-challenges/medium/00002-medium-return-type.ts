type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer U
  ? U
  : never;

type Result = MyReturnType<() => "a" | "b">; // "a" | "b"

export {};
