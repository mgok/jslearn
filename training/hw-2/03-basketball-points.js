function points(twoPoints, threePoints){
    if (typeof twoPoints === "number" && typeof threePoints === "number"){
        return twoPoints*2 + threePoints*3;
    }else{
        console.log("Please give me number!");
    }
}

console.log(points(1,1));
console.log(points("1",1));
console.log(points(Infinity,1));