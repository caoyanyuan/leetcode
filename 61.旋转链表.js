/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function(head, k) {
    if(head === null || head.next === null) return head

    let p = head, n = 1
    while(p.next) p = p.next, n++
    p.next = head

    k %= n
    k = n -k
    let q = head

    while(k--)  q = q.next

    q.next = null
    console.log(head)

    return head


    console.log(p, n, k)
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


let a = rotateRight(root, 2)
console.log(a)


