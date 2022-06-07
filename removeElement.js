/**
 * 
 * Example 1:

    Input: nums = [3,2,2,3], val = 3
    Output: 2, nums = [2,2,_,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 2.
    It does not matter what you leave beyond the returned k (hence they are underscores).
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
     while(nums.indexOf(val, 0) >= 0) {
         nums.splice(nums.indexOf(val, 0), 1)
     }

     return nums.length
};

console.log(removeElement([3,2,2,3], 3))