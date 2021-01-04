var giveMeSomeThing = (function (){
    return function(a){
        a = "something" + " " + a
        return a;
    }
})();

console.log(giveMeSomeThing("is better than nothing"));