/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    const newMap = new Map()
    if(!headA || !headB) return null
    
    let currA = headA
    let currB = headB
    
    while(currA) {
            newMap.set(currA, currA.val)
            currA = currA.next
        }
    
    while(currB) {
            const inter = newMap.has(currB)
            if(inter) {
                return currB
            }
            
        
        currB = currB.next
    }
    return
};

//Link to challenge: https://leetcode.com/problems/intersection-of-two-linked-lists/