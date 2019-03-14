const add = (a: number, b: number): number => {
  return a + b;
}

const add10 = (a: number): number => {
  return a + 10;
}

const sub5 = (a: number): number => {
  return a - 5;
}

const impureAdd = (a: number, b: number): number => {
  console.log("Launching missles");
  return a + b;
}

const curriedAdd = (a: number) => (b: number): number => {
  return a + b;
}

const curriedAdd10 = curriedAdd(10);

type Func<A, B> = (a: A) => B;

type ReduceFunc<A, B> = (a: A, b: B) => A;

function map<A, B>(f: Func<A, B>, xs: A[]): B[] {
  return xs.map(f);
}

function reduce<A, B>(f: ReduceFunc<A, B>, a: A, xs: B[]): A {
  return xs.reduce(f, a);
}

function compose<A, B, C>(g: Func<B, C>, f: Func<A, B>): Func<A, C> {
  return (a: A) => {
    return g(f(a));
  }
}

const add10Sub5 = compose(sub5, add10);

add10Sub5(10);

reduce(add, 0, [1, 2, 3]);