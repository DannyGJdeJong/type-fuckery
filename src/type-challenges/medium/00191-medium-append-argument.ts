type AppendArgument<T extends (...args: any) => any, U> = T extends (
  ...args: infer V
) => infer W
  ? (...args: [...V, U]) => W
  : never;

type Result = AppendArgument<(a: string) => number, boolean>; // (args_0: string, args_1: boolean) => number

export {};
