'use strict';
process.stdin.on('data', function (data) {
    main(String(data).trim());
});
/**** Ignore above this line. ****/

function main(input) {
    // Split the words read as input into an array of words
    var array = input.split(new RegExp("[ \n]+"));

    // Print array
    console.log(array);

    // Print each of its elements on a new line
    for (let value of array) {
        console.log(value);
    }

    // Print each of its keys on a new line
    for (let key in array) {
        console.log(key);
    }
}