   

function ListNode(val, next) {
    this.val = val
    this.next = next || null
}

let root = new ListNode(1)
root.next = new ListNode(2)
root.next.next = new ListNode(3)
root.next.next.next = new ListNode(4)
root.next.next.next.next = new ListNode(5)


let a = reverseList(root)
console.log(a)
