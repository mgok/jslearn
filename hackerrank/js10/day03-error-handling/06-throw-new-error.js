var input = "";
process.stdin.on('data', function (data) {
    input = String(data).trim();
    main();
});
/** Ignore above this line. **/

function throwMyError() {
    // Generate an exception with a value read from stdin
    throw new Error(input);
}

function main() {
    try {
        throwMyError();
    }
    catch (e) {
        console.log(e.message);
    }
}