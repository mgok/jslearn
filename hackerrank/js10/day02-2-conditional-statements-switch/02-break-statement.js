var input = "";
process.stdin.on('data', function (data) {
    input = data;
    switchDemo();
});
function readLine() { return input; }
/**** Ignore above this line. ****/

function switchDemo() {
    var n = parseInt(readLine());

    switch (n) {
        case 2:
            console.log("A");
        case 3:
            console.log("B");
        case 4:
            console.log("C");
        case 5:
            console.log("D");
        default:
            console.log("E");
    }

    console.log("Exited switch.");
}