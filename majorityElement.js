/**
 * Given an array nums of size n, return the majority element.
   The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
    
   Example 2:

   Input: nums = [2,2,1,1,1,2,2]
   Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 const majorityElement = function(nums) {
    // Iterative approach
    let obj = {}
    
    nums.forEach((el) => {
        if(!obj[el]) obj[el] = 1
        else
        obj[el] += 1
    })
    
    const sorted = Object.entries(obj).sort((a,b) => {
        if(a[1] < b[1]) return 1
        else return -1
    })
    
    return sorted[0][0]
    
    // 2 liner
    nums.sort()
    return nums[Math.floor(nums.length / 2)]
}; 
console.log(majorityElement( [2,2,1,1,1,2,2]))