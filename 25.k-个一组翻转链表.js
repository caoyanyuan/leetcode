/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseN = (head, n) => {
    let p = head, m = n
    while(--n && p) p = p.next
    if(!p)  return head

    return __reverseN(head, m)
}
var __reverseN = (head, n) => {
    if(n === 1)  return head

    let tail = head.next, p = __reverseN(head.next, n-1)

    head.next = tail.next
    tail.next = head

    return p
}
var reverseKGroup = function(head, k) {
    let ret = new ListNode(-1, head), p = ret, q = p.next

    while((p.next = reverseN(p.next, k)) != q) {
        p = q
        q = p.next
    }

    return ret.next
};
// @lc code=end


function ListNode(val, next) {
    this.val = val
    this.next = next || null
}

let root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
root.next.next.next = new ListNode(4)
root.next.next.next.next = new ListNode(5)


let a = reverseKGroup(root, 2)
//console.log(a)


