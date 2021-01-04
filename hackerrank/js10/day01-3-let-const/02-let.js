"use strict"
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    let a = input;

    // If 'a' is odd:
    if (a % 2 == 1) {
        // Increment 'a' by 1
        let a = input + 1;
        console.log("if(a): " + a);
    }

    console.log("main(a): " + a);
}