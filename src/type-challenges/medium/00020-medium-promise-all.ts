type PromiseAll<T extends any[]> = Promise<{
  [Key in keyof T]: T[Key] extends Promise<infer V> ? V : T[Key];
}>;

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

type Result = PromiseAll<[typeof promise1, typeof promise2, typeof promise3]>; // Promise<[number, 42, string]>

export {};
