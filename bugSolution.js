function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw an error for clarity
  }
  return a + b; // Normal addition
}

//More robust way to handle null values:
function foo2(a,b){
    a = a || 0; //if a is null, it will be 0.
    b = b || 0; //if b is null, it will be 0.
    return a + b;
}

console.log(foo2(null, 5)); // Output: 5
console.log(foo2(2, null)); // Output: 2
console.log(foo2(2, 5));    // Output: 7

console.log(foo(null, 5)); // Throws an error
console.log(foo(2, null)); // Throws an error
console.log(foo(2, 5));    // Output: 7