var input = "";
process.stdin.on('data', function (data) {
    input = data;
    main();
});
function readLine() { return input; }
/** Ignore above this line. **/
function main(){
    var s = "HackerRank";
    var i = +(readLine());
    console.log(s.charAt(i));
}