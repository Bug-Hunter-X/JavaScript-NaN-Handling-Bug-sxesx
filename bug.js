function foo(x) {
  if (x === null) {
    return 0; // Handle null
  } else if (x === undefined) {
    return 1; // Handle undefined
  } else if (typeof x !== 'number') {
    return 2; // Handle non-numbers
  }
  return x + 1;
}

console.log(foo(null));   // Output: 0
console.log(foo(undefined)); // Output: 1
console.log(foo(5));     // Output: 6
console.log(foo('hello')); // Output: 2
console.log(foo(NaN));   //Output: NaN