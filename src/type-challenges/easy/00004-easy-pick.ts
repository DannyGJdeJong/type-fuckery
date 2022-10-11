type MyPick<T, S extends string> = {
  [K in keyof T as K extends S ? K : never]: T[K];
};

type Result = MyPick<{ a: string; b: number; c: boolean }, "a" | "c">; // { a: string, c: boolean }

export {};
