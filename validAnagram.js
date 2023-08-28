/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

*/

var isAnagram = function(s, t) {
    const accum = {}
    if(s.length !== t.length) return false
    for(let str of s) {
        if(!accum[str]) {
            accum[str] = 1
        } else {
            accum[str]++
        }
    }
    console.log(accum)
    for(let str of t) {
        if(accum[str] === undefined) return false
        if(accum[str]) accum[str]--
        if(accum[str] === 0) delete accum[str]
        
    }
    console.log(Array.from(accum))
    if(Array.from(accum).length > 0) return false
    return true
    
};

console.log(isAnagram("aacc", "ccac"))