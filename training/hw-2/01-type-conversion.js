var a = undefined;

console.log(String(a));//undefined
console.log(Number(a));//NaN
console.log(Boolean(a));//false

a = null;

console.log(String(a));//null
console.log(Number(a));//0
console.log(Boolean(a));//false

a = true;

console.log(String(a));//true
console.log(Number(a));//1
console.log(Boolean(a));//true

a = false;

console.log(String(a));//false
console.log(Number(a));//0
console.log(Boolean(a));//false

a = "";

console.log(String(a));//
console.log(Number(a));//0
console.log(Boolean(a));//false

a = "1.2";

console.log(String(a));//1.2
console.log(Number(a));//1.2
console.log(Boolean(a));//true

a = "one";

console.log(String(a));//one
console.log(Number(a));//NaN
console.log(Boolean(a));//true

a = 0;

console.log(String(a));//0
console.log(Number(a));//0
console.log(Boolean(a));//false

a = -0;

console.log(String(a));//0
console.log(Number(a));//-0
console.log(Boolean(a));//false

a = 1;

console.log(String(a));//1
console.log(Number(a));//1
console.log(Boolean(a));//true

a = Infinity;

console.log(String(a));//Infinity
console.log(Number(a));//Infinity
console.log(Boolean(a));//true

a = NaN;

console.log(String(a));//NaN
console.log(Number(a));//NaN
console.log(Boolean(a));//false

a = {};

console.log(String(a));//[object Object]
console.log(Number(a));//NaN
console.log(Boolean(a));//true

a = [];

console.log(String(a));//
console.log(Number(a));//0
console.log(Boolean(a));//true