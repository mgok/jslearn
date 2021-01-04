'use strict';
process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {

    /**
    *   Defines an unnamed function and assigns it to a variable named square.
    *   @param {Number} x
    *   @returns {Number} The value of argument squared.
    **/
    var square = function(x) {
        return x * x;
    };

    // Print the value returned by passing input as x to the
    // anonymous function referenced by variable square
    console.log(square(input));
}