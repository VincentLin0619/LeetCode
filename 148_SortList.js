/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    const nums = []
    // 將list中的每個節點的值存入nums中
    while (head) {
        nums.push(head.val)
        head = head.next
    }
    // 對數nums排序，使用Array.sort()方法
    nums.sort((a, b) => a - b)
    // 創建一個虛擬節點
    let curr = new ListNode(-1)
    const result = curr
    // 將排序後的 nums 轉換為 list
    for (let i = 0; i < nums.length; i++) {
        curr.next = new ListNode(nums[i])
        curr = curr.next
    }
    return result.next
}