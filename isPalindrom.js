/**
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
    Given a string s, return true if it is a palindrome, or false otherwise.

    Example 1:

    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    function isAlphanumeric(char) {
        if(char <= 'z' && char >= 'a' || char >= 0 && char <= 9) {
            return true
        }
        return false
    }
    
    let resultStr = ''
    
    for(let el of s) {
        if(isAlphanumeric(el.toLocaleLowerCase())) {
            resultStr = resultStr.concat(el) 
        }
    }
    
    const lowerCase = resultStr.toLowerCase().split(' ').join('')
    const reversed = [...lowerCase].join('').split('').reverse().join('')

    return lowerCase === reversed

};

console.log(isPalindrome("A man, a plan, a canal: Panama"))