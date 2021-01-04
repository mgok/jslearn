var countTrue = function (a){
    var count = 0;
    for(var i = 0; i < a.length; ++i){
        if(a[i] === true)
        count++;
    }
    return count;
}

console.log(countTrue([true,true,false,true]));
console.log(countTrue([]));