var input = "";
var inputLines = "";
var lineNumber = 0;
process.stdin.on('data', function (data) {
    input += data;
});
process.stdin.on('end', function () {
    inputLines = input.split("\n");
    main();
});
function readLine() { return inputLines[lineNumber++]; }
/**** Ignore above this line. ****/

function sum(a, b) {
    return a - b;
}

function main() {
    var a = +(readLine());
    var b = +(readLine());

    console.log( sum(a, b) );
}