var timeForMilkAndCookies = (function(){
    return function(a){
        let result = (a.getMonth() === 11 && a.getDate() === 24) ? true: false;
        return result;
    }
}())

console.log(timeForMilkAndCookies(new Date(2013,11,24)));

console.log(timeForMilkAndCookies(new Date(2020,0,24)));

console.log(timeForMilkAndCookies(new Date(2013,11,23)));