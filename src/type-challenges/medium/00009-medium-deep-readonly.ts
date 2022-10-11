type DeepReadonly<T> = T extends object
  ? {
      readonly [K in keyof T]: DeepReadonly<T[K]>;
    }
  : T;

interface Todo {
  title: string;
  description: {
    text: string;
  };
}

const todo: DeepReadonly<Todo> = {
  title: "Hey",
  description: {
    text: "foobar",
  },
};

// @ts-ignore -- Cannot assign to 'title' because it is a read-only property.
todo.title = "Hello";
// @ts-ignore -- Cannot assign to 'text' because it is a read-only property.
todo.description.text = "barFoo";

export {};
