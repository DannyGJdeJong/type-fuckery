type Chainable<T = {}> = {
  option: <U extends string, V>(
    key: U,
    value: V
  ) => Chainable<{
    [K in keyof T | U]: K extends U ? V : K extends keyof T ? T[K] : never;
  }>;
  get: () => T;
};

declare const config: Chainable;

interface ExpectedResult {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

type Result = typeof result; // Same as ExpectedResult

export {};
