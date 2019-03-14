const add = (a: number, b: number) => {
  return a + b;
}

const add10 = (a: number): number => {
  return a + 10;
}

const impureAdd = (a: number, b: number) => {
  console.log("Launching missles");
  return a + b;
}

type func<A, B> = (a: A) => B;
type reduceFunc<A, B> = (a: A, b: B) => A;

function map<A, B>(f: func<A, B>, xs: A[]): B[] {
  return xs.map(f);
}

function reduce<A, B>(f: reduceFunc<A, B>, a: A, xs: B[]): A {
  return xs.reduce(f, a);
}

function compose<A, B, C>(g: func<B, C>, f: func<A, B>, a: A): C {
  return g(f(a));
}