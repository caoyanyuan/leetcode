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
var reverseN = (head, n) => {
    if(n === 1) return head

    let p = reverseN(head.next, n-1), tail = head.next

    head.next = tail.next
    tail.next = head

    return p
}

var reverseBetween = function(head, left, right) {
    if(head === null) return head
    let  ret = new ListNode(-1, head), p = ret, cnt = right - left + 1

    while(--left) p = p.next
    p.next = reverseN(p.next, cnt)

    return ret.next
};
// /** 1 2 3 4 5 */   2
// /** 2 1 3 4 5 */
// @lc code=end
// 迭代实现  反转前n个
var reverseN_1 = (head, n) => {
    let prev = null, curr = head;

    while(n--) {
        [curr.next,prev,curr] = [prev,curr,curr.next]
    }
    head.next = prev

    return prev
}



// function ListNode(val, next) {
//     this.val = val
//     this.next = next || null
// }

// let root = new ListNode(1)
// root.next = new ListNode(2)
// root.next.next = new ListNode(3)
// root.next.next.next = new ListNode(4)
// root.next.next.next.next = new ListNode(5)


// reverseBetween(root, 2, 4)
//reverseBetween(root, 2, 0)

