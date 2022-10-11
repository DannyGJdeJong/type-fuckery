type MyOmit<T, U> = {
  [K in keyof T as K extends U ? never : K]: T[K];
};

type Result = MyOmit<{ a: string; b: number; c: boolean }, "b">; // { a: string, c: boolean }

export {};
