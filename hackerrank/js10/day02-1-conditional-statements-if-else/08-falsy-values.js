var a = true;
var b = new Boolean(false);
var c = "";

console.log(a);
console.log(b);
console.log("\"" + c + "\"");

if (a) {
    console.log("Hello from a");
}

if (b) {
    console.log("Hello from b");
}

if (c) {
    console.log("Hello from c");
}
else {
    console.log("c is false");
}