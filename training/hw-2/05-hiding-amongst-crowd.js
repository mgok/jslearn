var detectWord = (function(){
    return function(a){
        return a.match( /[a-z]/g, '' ).join("");
    }
})()

console.log(detectWord("RTERTcEWYWaETYWE^TGtDSFGSYEW"));