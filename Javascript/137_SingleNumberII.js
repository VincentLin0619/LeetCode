/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const countMap = nums.reduce((index, value) => {
    if (index[value]) {
      index[value]++;
    } else {
      index[value] = 1;
    }
    return index;
  }, {});
  console.log(countMap);
  const result = Object.keys(countMap).filter((value) => countMap[value] === 1);

  console.log(result);

  return result;
  //   const countMap = {};
  //   for (let num of nums) {
  //     countMap[num] ? countMap[num]++ : (countMap[num] = 1);
  //   }
  //   for (let value in countMap) {
  //     if (countMap[value] === 1) {
  //       return value;
  //     }
  //   }
};

singleNumber([2, 0, 2, 0, 99]);
