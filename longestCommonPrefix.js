/**
 * Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    

    Example 1:

    Input: strs = ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = function(strs) {

    let res = '';
    let first = strs[0];
    for(let i = 0; i < first.length; i++){
        for(let j = 1; j < strs.length; j++){
            if(strs[j][i] !== first[i]){
                return res;
            }
        }
            res += first[i];
        }

    return res

};
