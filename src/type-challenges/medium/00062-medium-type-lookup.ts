type LookUp<T, U extends string> = T extends { type: U } ? T : never;

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Result = LookUp<Cat | Dog, "dog">; // Dog

export {};
