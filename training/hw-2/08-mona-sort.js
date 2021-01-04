const numberOfSwaps = (function () {

    const swapArrayElements = function (arr, indexA, indexB) {
        const temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        return arr;
    };

    return function countSwap(a) {
        let swap = 0;
        let sorting = true;
        while (sorting) {
            sorting = false;
            for (let i = 0; i < a.length - 1; ++i) {
                if (a[i] > a[i + 1]) {
                    sorting = true;
                    a = swapArrayElements(a, i, i + 1);
                    swap++;
                }
            }
        }
        return swap;
    }
})();

console.log(numberOfSwaps([5,4,3]));
console.log(numberOfSwaps([1,3,4,5]));
console.log(numberOfSwaps([5,4,3,2]));