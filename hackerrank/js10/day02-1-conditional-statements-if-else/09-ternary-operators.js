process.stdin.on('data', function (data) {
    main(+(data));
});
/**** Ignore above this line. ****/

function main(input) {
    // The examples below all accomplish the same thing.

    // Example 1:
    input % 2 == 0 ? console.log(input + " is EVEN") : console.log(input + " is ODD");

    // Example 2:
    console.log( input + " is " + ((input % 2 == 0) ? "EVEN" : "ODD"));

    // Example 3:
    var parity = input % 2 == 0 ? "EVEN" : "ODD";
    console.log(input + " is " + parity);
}