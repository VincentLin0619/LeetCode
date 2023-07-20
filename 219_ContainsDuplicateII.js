/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = {};
  for (let num in nums) {
    let i = nums[num];
    if (map[i] && num - map[i] <= k) {
      //   console.log(true);
      return true;
    }
    map[i] = num;
  }
  //   console.log(false, map);
  return false;
};
const array = [1, 2, 3, 1, 2, 3],
  k = 2;
containsNearbyDuplicate(array, k);
