function maxmin(...args) {
  let max = args[0];
  let min = args[0];
  args.forEach((ele, i) => {
    if (i === args.length - 1) return;
    if (!(max > args[i + 1])) {
      max = args[i + 1];
    }
    if (min > args[i + 1]) {
      min = args[i + 1];
    }
  });
  return {
    max: max,
    min: min
  };
}

maxmin(-1, 10, 1);
