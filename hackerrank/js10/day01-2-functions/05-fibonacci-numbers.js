'use strict';
process.stdin.on('data', function (data) {
    let input = String(data).split(new RegExp("[\n ]+"));
    main(+(input[0]));
});
/**** Ignore above this line. ****/

function main(n){
    function fibonacci(n) {
        if (n > 2) {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
        else if (n < 1) {
            return 0;
        }
        // else, return 1
        return 1;
    }

    console.log(fibonacci(n));
}