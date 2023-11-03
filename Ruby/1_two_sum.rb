# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  hash = {}
  nums.each do |num|
    hash[num] = nums.index(num)
    printf "Hash: %s, Index: %s\n", hash, nums.index(num)
    if hash[target - num]
      return [hash[target - num], nums.index(num)]
      # [hash[7], nums.index(2)]
    end
  end
end

nums = [2,7,11,15]
target = 9

p two_sum(nums, target)
