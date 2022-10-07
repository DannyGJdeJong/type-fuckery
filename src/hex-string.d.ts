type HexChar =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f";

type IsHexChars<T extends string> = T extends HexChar
  ? T
  : T extends `${HexChar}${infer R}`
  ? IsHexChars<R>
  : never;

/**
 * Checks whether a given string is a valid hexadecimal string with the leading 0x.
 */
type HexString<T extends string> = T extends `0x${infer R}`
  ? IsHexChars<Lowercase<R>> extends never
    ? "Invalid HexString"
    : T
  : "Invalid HexString";

type ValidHexString = HexString<"0xdeadbeef">; // 0xdeadbeef
type InvalidHexString = HexString<"0xfoobar">; // "Invalid HexString"

export {};
