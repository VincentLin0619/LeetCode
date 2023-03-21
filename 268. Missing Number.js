/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let ans = 0;
    // let arr = nums.sort();
    if (nums.length == 0) { return 0 }
    for (let i = 0; i < nums.length; i++) {
        ans += nums[i] - i
    }
    // console.log(ans)
    return nums.length - ans
};