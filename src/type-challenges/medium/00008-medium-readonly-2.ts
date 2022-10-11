type MyReadonly2<T, U extends keyof T> = {
  readonly [K in keyof T as K extends U ? K : never]: T[K];
} & {
  [K in keyof T as K extends U ? never : K]: T[K];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

// @ts-ignore -- Cannot assign to 'title' because it is a read-only property.
todo.title = "Hello";
// @ts-ignore -- Cannot assign to 'description' because it is a read-only property.
todo.description = "barFoo";
todo.completed = true; // OK

export {};
