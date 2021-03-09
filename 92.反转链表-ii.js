/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let  ret = new ListNode(-1), r = head, l = ret
    left--
    while(left--) {

        l = r
        r = r.next

        console.log(l)
    }

    //console.log(ret)
};
// /** 1 2 3 4 5 */
// /** 1 2 */
// @lc code=end

var reverse = (head, n) => {

    let prev = null, curr = head, tail = head;

    while(n--) {
        [curr.next,prev,curr] = [prev,curr,curr.next]
    }
    tail.next = curr

    return prev
}

function ListNode(val, next) {
    this.val = val
    this.next = next
}

let root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
root.next.next.next = new ListNode(4)

//reverse(root, 2)
reverseBetween(root, 2, 0)

