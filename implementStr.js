/** 
 * 
 * Example 1:
    Input: haystack = "hello", needle = "ll"
    Output: 2

    Example 2:

    Input: haystack = "aaaaa", needle = "bba"
    Output: -1
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(!needle) return -1
    if(!haystack.includes(needle)) return -1
    
    return haystack.split(needle)[0].length
};

console.log(strStr("lookyloo", "loo"))