type Length<T extends Array<any>> = T extends { length: infer L } ? L : never;

type BuildTuple<
  L extends number,
  T extends Array<any> = []
> = L extends Length<T> ? T : BuildTuple<L, [...T, undefined]>;

// First usage of BuildTuple inside Length will give the error:
// "Type instantiation is excessively deep and possibly infinite."
// If the first usage is ignored, this error will not be thrown in the future.
// @ts-ignore -- Type instantiation is excessively deep and possibly infinite.
type Num<N extends number> = Length<BuildTuple<N>>;

type Add<A extends number, B extends number> = Length<
  [...BuildTuple<A>, ...BuildTuple<B>]
>;

type Subtract<A extends number, B extends number> = BuildTuple<A> extends [
  ...infer R,
  ...BuildTuple<B>
]
  ? Length<R>
  : never;

type Multiply<
  A extends number,
  B extends number,
  R extends any[] = []
> = A extends 0
  ? Length<R>
  : Multiply<Subtract<A, 1>, B, [...R, ...BuildTuple<B>]>;

type Divide<
  A extends number,
  B extends number,
  R extends number = 0
> = Subtract<A, B> extends never ? R : Divide<Subtract<A, B>, B, Add<R, 1>>;

type DividesEvenly<A extends number, B extends number> = Multiply<
  Divide<A, B>,
  B
> extends A
  ? true
  : false;

type IsPrime<A extends number, R extends number = 2> = R extends A
  ? true
  : DividesEvenly<A, R> extends false
  ? IsPrime<A, Add<R, 1>>
  : false;

type _2Prime = IsPrime<2>; // true
type _3Prime = IsPrime<3>; // true
type _4Prime = IsPrime<4>; // false
type _5Prime = IsPrime<5>; // true
type _6Prime = IsPrime<6>; // false
type _7Prime = IsPrime<7>; // true
type _8Prime = IsPrime<8>; // false
type _9Prime = IsPrime<9>; // false
type _10Prime = IsPrime<10>; // false
type _11Prime = IsPrime<11>; // true
type _12Prime = IsPrime<12>; // false
type _13Prime = IsPrime<13>; // true
type _14Prime = IsPrime<14>; // false
type _15Prime = IsPrime<15>; // false
type _16Prime = IsPrime<16>; // false
type _17Prime = IsPrime<17>; // true
type _18Prime = IsPrime<18>; // false
type _19Prime = IsPrime<19>; // true

export {};
