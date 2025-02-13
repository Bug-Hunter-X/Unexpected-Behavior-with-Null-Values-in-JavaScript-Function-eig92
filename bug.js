function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Normal addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(2, null)); // Output: 0
console.log(foo(2, 5));    // Output: 7

//The bug is that it will not show an error when the input is null.