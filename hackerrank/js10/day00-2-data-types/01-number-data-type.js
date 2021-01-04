var var1 = 1;
var var2 = 0;
var var3 = -0;

console.log("1 / 0 = " + var1 / var2);
console.log("1 / -0 = " + var1 / var3);
console.log("MAX_VALUE: " + Number.MAX_VALUE);
console.log("MAX_VALUE + 1 = " + Number.MAX_VALUE * 2);
console.log("MIN_VALUE = " + Number.MIN_VALUE);
console.log("MIN_VALUE - 1 = " + Number.MIN_VALUE - 1);
console.log("MAX_SAFE_INTEGER = " + Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER = " + Number.MIN_SAFE_INTEGER);
console.log("SquareRoot(-1) = " + Math.sqrt(-1));
console.log("isSafeInteger(100) = " + Number.isSafeInteger(100));
console.log("isSafeInteger(NaN) = " + Number.isSafeInteger(NaN));