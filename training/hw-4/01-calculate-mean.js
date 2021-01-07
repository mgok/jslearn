var arr = [1,2,3,4];

const getAvg = function (avg, num, index, array){
    return avg + num/array.length;
}

console.log(arr.reduce(getAvg));
