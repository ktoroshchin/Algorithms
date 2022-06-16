/**
   Given an integer n, return true if it is a power of two. Otherwise, return false.
   An integer n is a power of two, if there exists an integer x such that n == 2x.
   
   Example 2:

    Input: n = 16
    Output: true
    Explanation: 2^4 = 16
 */


/**
 * @param {number} n
 * @return {boolean}
 */
 const isPowerOfTwo = function(n) {
    if(n === 0) return false
    if(n === 1) return true
    
    let curr = n
    for(let i = 0; i < n; i++) {
        curr = curr / 2
        if(curr === 1) return true
    }
    
    return false

    // --------RECURSIVE VERSION--------
    // var isPowerOfTwo = function(n) {
    //     if(n === 0) return false
    //     if(n === 1) return true
        
    //     return isPowerOfTwo(n / 2)
    // };
};

console.log(isPowerOfTwo(16))