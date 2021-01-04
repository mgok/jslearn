"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    let a = input;

    // This will throw "SyntaxError: Identifier 'a' has already been declared"
    //let a = input + 1;

    console.log(a);
}