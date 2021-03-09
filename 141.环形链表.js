/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null) return false
    let p = head, q = head.next

    while(p !== q && p && q && q.next) {
        p = p.next
        q = q.next.next
    }

    return Boolean(q && q.next)
};

// @lc code=end