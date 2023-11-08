// Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
// Based on https://gist.github.com/blixt/f17b47c62508be59987b
let _seed = 42;
Math.random = () => {
  _seed = _seed * 16807 % 2147483647;
  return (_seed - 1) / 2147483646;
};
