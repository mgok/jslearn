'use strict';
process.stdin.on('data', function (data) {
    let input = String(data).split(new RegExp("[\n ]+"));
    main(+(input[0]), +(input[1]));
});
/**** Ignore above this line. ****/

function main(n, k) {

    var nTimesK = function(n, k){
        console.log("n: " + n);

        // Recursive Case
        if(n > 1) {
            return k + nTimesK(n - 1, k);
        }
        // Base Case n = 1
        else {
            return k;
        }
    }

    console.log("Result: " + nTimesK(n,k));
}