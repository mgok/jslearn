var a = ['c', 'a', 'd', 'b', 'aa'];
var b = [9, 2, 13, 7, 1, 12, 123];

// Sort in ascending lexicographical order using a built-in
a.sort();
b.sort();

console.log('a:', a);
console.log('b:', b);


var a = ['c', 'a', 'd', 'b', 'aa'];
var b = [9, 2, 13, 7, 1, 12, 123];

var sortFunction = function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    // a must be equal to b
    return 0;
}

// Sort in descending lexicographical order using a compare function
a.sort(sortFunction);
b.sort(sortFunction);


console.log('a:', a);
console.log('b:', b);


var a = ['c', 'a', 'd', 'b', 'aa'];


//here is not working
// Sort in descending lexicographical order using a compare arrow function
a.sort((x, y) => x < y);

console.log('a:', a);