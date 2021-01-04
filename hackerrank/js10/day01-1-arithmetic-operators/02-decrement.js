process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/
function main(input) {
    var a = input;
    // Print the value of 'a' and the predecremented value of 'a':
    console.log("a(" + a + "), --a(" + --a + ")");
    // Assign the current value of 'a' to 'b' and then postdecrement 'a':
    var b = a--;
    // Print the values of 'a' once and 'b' twice, then postdecrement the 2nd 'b':
    console.log("a(" + a + "), b(" + b + "), b--(" + b-- + ")");
    // Print the final values of 'a' and 'b':
    console.log("a(" + a + "), b(" + b + ")");
}