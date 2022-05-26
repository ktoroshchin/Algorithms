/**
 * Given the head of a singly linked list, return true if it is a palindrome.
 * Input: head = [1,2,2,1]
    Output: true
    https://leetcode.com/problems/palindrome-linked-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 const isPalindrome = function(head) {
    const mainArr = []
    let arr1 = []
    let arr2 = []
    
    
    while(head !== null ) {
        mainArr.push(head.val)
        head = head.next
    }
    
    for(let i = 0; i < mainArr.length; i++) {
        arr1.push(mainArr[i])
        arr2[i] = mainArr.pop(i)
        
        if(arr1[i] !== arr2[i]) return false
    }
    return true
}    