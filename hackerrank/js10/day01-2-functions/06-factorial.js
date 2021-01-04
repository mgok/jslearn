'use strict';
process.stdin.on('data', function (data) {
    let input = String(data).split(new RegExp("[\n ]+"));
    main(+(input[0]));
});
/**** Ignore above this line. ****/

function main(n){
    function factorial(n) {
        if (n > 1) {
            return n * factorial(n - 1);
        }
        // Returns 1 if n <= 1
        return 1;
    }

    console.log(factorial(n));
}