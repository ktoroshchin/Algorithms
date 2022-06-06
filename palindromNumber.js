/**
 * Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
 */


/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const main = x.toString().split('')
    const arr = [...main]
    const rev = []
    for(let i = 0; i < main.length; i++) {
        rev[i] = main.pop()
        if(arr[i] !== rev[i]) return null
    }
    return true
};

console.log(isPalindrome(-121))