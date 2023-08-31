/**
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/



/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let S = s.split('')
    const v = {
        o: 'o',
        O: 'O',
        u: 'u',
        U: 'U',
        i: 'i',
        I: 'I',
        a: 'a',
        A: 'A',
        e: 'e',
        E: 'E'
    }
    let start = 0
    let end = S.length - 1
    
    while(start < end) {
        const val = S[start]
        const val2 = S[end]
        
        if(val === v[val] && val2 === v[val2]) {
            const first = val
            S[start] = val2
            S[end] = first
            start++
            end--
        } else if(!v[val]) {
            start++
        } else if(!v[val2]) {
            end--
        }
    }

    return S.join('')
};