'use strict';
process.stdin.on('data', function (data) {
    let input = String(data).split(new RegExp("[\n ]+"));
    main(input[0], +(input[1]), +(input[2]));
});
/**** Ignore above this line. ****/

function greetings(name) {
    console.log("Hello, " + name);
}

function sum(a, b) {
    return a + b;
}

function main(name, a, b) {
    greetings(name);
    console.log(sum(a, b));
}