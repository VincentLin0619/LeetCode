/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeTwoLists = function (list1, list2) {
    let result = new ListNode();
    let listPosition = result;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            listPosition.next = list2;
            list2 = list2.next;
        } else {
            listPosition.next = list1;
            list1 = list1.next;
        }
        listPosition = listPosition.next;
    }
    listPosition.next = (list1 ? list1 : list2);
    return result.next;
};