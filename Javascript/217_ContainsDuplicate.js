/**
 * @param {number[]} nums
 * @return {boolean}
 */
nums = [0, 4, 5, 0, 3, 6];
var containsDuplicate = function (nums) {
  let hashMap = {};
  for (let num of nums) {
    if (hashMap[num] === num) {
      console.log(true);
      return true;
    }
    hashMap[num] = num;
    console.log(hashMap);
  }
  console.log(hashMap);
  console.log(false);
  return false;
};

containsDuplicate(nums);
