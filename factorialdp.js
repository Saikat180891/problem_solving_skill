function factorial(value) {
  let A = [1];

  for (let i = 1; i <= value; i++) {
    A[i] = A[i - 1] * i;
  }

  return A;
}

console.log(factorial(5));
