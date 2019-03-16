export function add(a: number, b: number): number {
  return a + b;
}

export function add10 (a: number): number {
  return a + 10;
}

export function sub5 (a: number): number {
  return a - 5;
}

export function even (a: number): Boolean {
  return a % 2 === 0;
}

export function impureAdd (a: number, b: number): number {
  console.log("Launching missles");
  return a + b;
}

function curriedAdd(a: number): Func<number, number> {
  return function (b: number): number {
    return a + b;
  }
}

export const curriedAdd10 = curriedAdd(10);

type Func<A, B> = (a: A) => B;

type Predicate<A> = (a: A) => Boolean;

type ReduceFunc<A, B> = (a: A, b: B) => A;

export function map<A, B>(f: Func<A, B>, xs: A[]): B[] {
  return xs.map(f);
}
export function curriedMap<A, B>(f: Func<A, B>) {
  return (xs: A[]) => xs.map(f);
}

export function filter<A>(f: Predicate<A>, xs: A[]): A[] {
  return xs.filter(f);
}

export function curriedFilter<A>(f: Predicate<A>) {
  return (xs: A[]) => xs.filter(f);
}

export function reduce<A, B>(f: ReduceFunc<A, B>, a: A, xs: B[]): A {
  return xs.reduce(f, a);
}

export function compose<A, B, C>(g: Func<B, C>, f: Func<A, B>): Func<A, C> {
  return (a: A) => {
    return g(f(a));
  }
}

export function not(a: Boolean): Boolean {
  return !a;
}

export const odd = compose(not, even);
export const add10Sub5 = compose(sub5, add10);

add10Sub5(10) //=> 15
map(add10, [1, 2, 3]) //=> [11, 12, 13]
filter(even, [1, 2, 3, 4, 5]) //=> [2, 4]
reduce(add, 0, [1, 2, 3]); //=> 6

const evens = curriedFilter(even);
const odds = curriedFilter(odd);

evens([1, 2, 3, 4, 5]) // => [2, 4]
odds([1, 2, 3, 4, 5]) // => [1, 3, 5]
