# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val = 0, _next = nil)
        @val = val
        @next = _next
    end
end
# @param {ListNode} list1
# @param {ListNode} list2
# @return {ListNode}
def merge_two_lists(list1, list2)
  list = ListNode.new(0)
  head = list
  while list1 && list2
    if list1.val <= list2.val
      list.next = list1
      list1 = list1.next
    else
      list.next = list2
      list2 = list2.next
    end
  end
  list.next = list1 || list2
  head.next
end

merge_two_lists([1,2,4], [1,3,4])
