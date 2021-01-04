function test(){
    let sum = 0;
    for(let i; i<arguments.length; i++){
        sum += arguments[i];
    }
    console.log(arguments);
    console.log(sum);
}

test(1,2,4);