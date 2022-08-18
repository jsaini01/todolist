function add(a, b) {
  let sum = a + b;
  return sum;
}

const sub = (a, b) => {
  let sub = a - b;
  return sub;
};

const Mult = (a, b) => {
  let Mult = a * b;
  return Mult;
};

const div = (a, b) => {
  let div = a / b;
  div = div.toFixed(2);
  return div;
};

export { add, sub, Mult, div };
