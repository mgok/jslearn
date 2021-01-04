function keysAndValues(obj){
    retArr = [[],[]];
    Object.keys(obj).sort()
      .forEach(function(v, i) {
          retArr[0].push(v);
          retArr[1].push(obj[v]);
       });
    return retArr;
}

console.log(keysAndValues({key1:true,key3:undefined,key2:false}));