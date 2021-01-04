// 1. Numbers
// Literals
// integer literal
// 100;
// //floating point literal
// 10.3;
// .333333;
//
// //seperators
// let billion = 1_000_000_000;
// console.log(billion);
//
// let fraction = 0.123_456_789;
// console.log(fraction);
// Arithmetic
//Basic
// let a = 4;
// let b = 3;
//
// console.log("a:", a);
// console.log("b:", b);
// // + addition
// console.log("a+b: ", a + b);
//
// // - subtraction
// console.log("a-b: ", a - b);
//
// // * multiplication
// console.log("a*b: ", a * b);
//
// // / division
// console.log("a/b: ", a / b);
//
// // ** exponentiation
// console.log("a ** b: ", a ** b);
//Complex
// let c = 2;
// let d = 3;
// let e = 0.6;
// let f = -5;
//
// console.log(`Math.pow(${c}, ${d}):`, Math.pow(c, d));
// console.log(`Math.round(${e}):`, Math.round(e));
// console.log(`Math.ceil(${e}):`, Math.ceil(e));
// console.log(`Math.floor(${e}):`, Math.floor(e));
// console.log(`Math.abs(${f}):`, Math.abs(f));
// console.log(`Math.max(${f}, ${e}, ${d}, ${c}):`, Math.max(f, d, e, c));
// console.log(`Math.min(${f}, ${e}, ${d}, ${c}):`, Math.min(f, d, e, c));
// console.log(`Math.sqrt(${c}):`, Math.sqrt(c));
// Rounding Errors
// let x = 0.3 - 0.2; // 0.1
// let y = 0.2 - 0.1; // 0.1
//
// console.log(y.toFixed(1) === x.toFixed(1));   // true
// console.log(x === 0.1); // true
// console.log(y === 0.1); // true
// 2.Strings
// Literals
// console.log("");
//
// console.log('testing');
//
//
// console.log(`"She said 'hi'", he said.`);
//
// let who = "he";
// let what = "said";
// console.log(`"She said 'hi'", ${who} ` + what);
//
// console.log("two\nlines");
//
// console.log("one\
// long\
// line");
//
// console.log(`the newline character at the end of this line
// is included literally in this string`);
// Working with strings
// // concatenate
// let msg = "Hello, " + "TAE";
// console.log(msg);
//
// let name = "visitor";
// msg = "Welcome to my blog, " + " " + name;
// console.log(msg);
//
// // length
// console.log("length:", msg.length);
//
// // JS API
//
//Obtaining portions of string
// console.log("first 3 chars (substr):", msg.substr(0, 3));
// console.log("first 3 chars (slice):", msg.slice(0, 3));
// console.log("last 3 chars:", msg.slice(-3));
// console.log(`split with ",": `, msg.split(", "));
//
// //Searching a string
// console.log("index of [w]:", msg.indexOf("w"));
// console.log("index of [W]:", msg.indexOf("W"));
// console.log("index of [m]:", msg.indexOf("m"));
// console.log("index of [m] after 5th char:", msg.indexOf("m", 6));
// console.log("index of [m] after 4th char:", msg.indexOf("m", 5));
// console.log("last index of [o]:", msg.lastIndexOf("o"));
//
// // Boolean searching functions in ES6 and later
// console.log("starts with [Wel] ?", msg.startsWith("Wel"));
// console.log("ends with [tor] ?", msg.endsWith("tor"));
// console.log("includes [blog] ?", msg.includes("blog"));
//
// // Creating modified versions of string
// console.log("replace [blog] with [match]:", msg.replace("blog", "match"));
// console.log("lowercase:", msg.toLowerCase());
// console.log("uppercase:", msg.toUpperCase());
//
// // Individual chars
// console.log("first char:", msg.charAt(0));
// console.log("first char:", msg[0]);
// console.log("first char code:", msg.charCodeAt(0));
//
// //String padding functions
// console.log("x".padStart(3));
// console.log("x".padEnd(3));
// console.log("x".padStart(4, "*"));
// console.log("x".padEnd(4, "*"));
//
// //space trimming
// console.log(" x ");
// console.log(" x ".trim());
// console.log(" x ".trimStart());
// console.log(" x ".trimEnd());
//
// console.log(msg);
// Template Literals (ES6 and later)
// let s = `hello world`;
//
// let name = "TAE";
// let greeting = `Hello ${name}`;
//
// console.log(greeting);
// 3. boolean
// Yes or no, true or false
// used on control structures
// let a = 4;
// console.log(`a = ${a}`);
// console.log(`a === ${a} -->`, a === 4);
//
// console.log("undefined --> ", Boolean(undefined));
// console.log("null --> ", Boolean(null));
// console.log("0 --> ", Boolean(0));
// console.log("-0 --> ", Boolean(-0));
// console.log("NaN --> ", Boolean(NaN));
// console.log("empty string --> ", Boolean(""));
// console.log(if(${a} !== null) is the same with if(${a})`);
// 4. Variable declaration and assignment
// let m;
// let sum;
//
// let a, b;
//
// let message = "hello";
// let i = 0, j = 0, k = 0;
//
// let x = 3, y = x*x;
// const d;
// const e = "E";
// repeated declarations
// const z = 1;
// if(z === 1) {
//     let z = 2;
//     console.log(z)
// }
// console.log(z);
// let z = 4;
// destructing assignment
// when a destructing assignment occurs, one or more values are extracted ("destructured") from the value right
// and stored into the variables named on the left
// let [x, y] = [1, 2];
// console.log("x, y: ", x, ", ", y);
//
// function toPolar(x, y) {
//     return [Math.sqrt(x*x + y* y), Math.atan2(y, x)];
// }
//
// let [R, theta] = toPolar(1.0, 1.0);
// console.log("R, theta: ", R, ", ", theta);
//
// let [a, c] = [1];
// console.log("a, c: ", a, ", ", c);
// [,a,,c,] = [0, 2, 4, 6, 8];
// console.log("a, c: ", a, ", ", c);
//
// let [k, ...l] = [1, 2, 3, 4];
// console.log("k, l: ", k, ", ", l);
//
// let [first, ...rest] = "Hello";
// console.log("first, rest: ", first, ", ", rest);
//
// let transparent = {r: 0.0, g: 0.0, b: 0.0};
// console.log("transparent: ", transparent);
// let {r, g, b} = transparent;
// console.log("r, g, b: ", r, ", ", g, ", ", b);
// let {r:red, ...restProps} = transparent;
// console.log("red, restProps: ", red, ", ", restProps);
//
// let {sin, cos, tan} = Math;
// console.log("sin, cos, tan, remain: ", sin, ", ", cos, ", ", tan);