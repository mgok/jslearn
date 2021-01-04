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
            break;
        case 3:
            console.log("B");
            break;
        case 4:
            console.log("C");
            break;
        case 5:
            console.log("D");
            break;
        default:
            console.log("E");
    }

    console.log("Exited switch.");
}