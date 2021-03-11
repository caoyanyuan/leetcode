/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head === null || head.next === null) return head;
   
    let tail = head.next, p = reverseList(head.next)

    head.next = tail.next;
    tail.next = head

    return p

};

/**迭代
 * var reverseList = function(head) {
    if(head === null) return null;
    
    var prev = null, cur = head, p = head.next;

    while(cur) {
        cur.next = prev;
        prev = cur;

        (cur = p) && (p = p.next)
    }
    return prev
};
 */

// @lc code=end



