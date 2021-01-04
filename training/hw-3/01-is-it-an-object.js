function isObject(a){
    let flag = false;
    if( (typeof a === "object" || typeof a === 'function') && (a !== null) )
    {
        flag = true;
    }
    return flag;
}

console.log(isObject(function add(x,y) {return x+y}));
console.log(isObject(new RegExp("^[a-zA-Z0-9]+$\\)","g")));
console.log(isObject(null));
console.log(isObject(""));