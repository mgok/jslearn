function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(a, b){return a-b});
    let max = Math.max.apply(null,nums);
    for (let i = nums.length; i > 0; i--) {
        if (nums[i-1] !== max) {
            return nums[i-1];
        }
    }
    return max;
}

console.log(getSecondLargest([10, 9,9,8,8,11,8,0,9,1]));