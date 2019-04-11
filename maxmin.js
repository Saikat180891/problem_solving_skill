function maxmin(...args) {
  let max = args[0];
  let min = args[0];
  args.forEach((ele, i, self) => {
    if (i === self.length - 1) return;
    if (!(max > self[i + 1])) {
      max = self[i + 1];
    }
    if (min > self[i + 1]) {
      min = self[i + 1];
    }
  });
  return {
    max: max,
    min: min
  };
}

maxmin(-1, 10, 1);
