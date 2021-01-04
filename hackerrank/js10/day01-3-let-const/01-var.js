"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    var a = input;

    // If 'a' is odd:
    if (a % 2 == 1) {
        var a = input + 1;
        console.log("if(a): " + a);
    }

    console.log("main(a): " + a);
}