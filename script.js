function sum(numbers) {
  // Reduce method apply a function simultaneously against two values of the array
  // (from left to right) as to reduce it to a single value.
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum([1, -22, 5.14, 22, 33])); // Output will be 39.14
