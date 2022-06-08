function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
    const values = []
    
    if(!head) return head
    
    while(head) {
        if(!values.includes(head.val)) {
            values.push(head.val)
        }

        head = head.next
    }
    
    let newHead = new ListNode()
    let current = newHead
    
    for(let i = 0; i < values.length; i++) {
        if(i === values.length - 1) {
            current.val = values[i]
            current.next = null
        } else {
            current.val = values[i]
            current.next = new ListNode()
            current = current.next
        }
    }
    
    return current
};
// Link to challenge https://leetcode.com/problems/remove-duplicates-from-sorted-list/