# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.

def merge(nums1, m, nums2, n)
  pointer = m + n - 1  # 從最後一個開始
  i = m - 1
  j = n - 1
  while i >= 0 && j >= 0
    if nums1[i] > nums2[j]
      nums1[pointer] = nums1[i]
      i -= 1
    else
      nums1[pointer] = nums2[j]
      j -= 1
    end
    pointer -= 1
  end
  p nums1
end

nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3

merge(nums1, m, nums2, n)
