const add = (a: number, b: number) => {
  return a + b;
}

const impureAdd = (a: number, b: number) => {
  console.log("Launching missles");
  return a + b;
}