var a = ['first', 'second', 'third', 'fourth'];
console.log('a:', a);

// Shallow copy array 'a' into a new object
let b = a.slice();

a.push("added after slice")
console.log('a:', a);
console.log('b:', b);