"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    const a = input;

    // This will throw "SyntaxError: Missing initializer in const declaration"
    // const b;

    console.log(a);
}