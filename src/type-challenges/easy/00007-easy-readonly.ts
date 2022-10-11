type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// @ts-ignore -- Cannot assign to 'title' because it is a read-only property.
todo.title = "Hello";
// @ts-ignore -- Cannot assign to 'description' because it is a read-only property.
todo.description = "barFoo";

export {};
