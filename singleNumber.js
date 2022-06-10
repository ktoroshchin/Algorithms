/**
 *Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

  You must implement a solution with a linear runtime complexity and use only constant extra space.

  Example 1:

  Input: nums = [2,2,1]
  Output: 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 function singleNumber(nums) {
    const obj = {}
    for(let num of nums) {
        
        if(!obj[num]) {
            obj[num] = 1
        } else {
            obj[num] += 1
        }
    }

    for(let i in obj) {
        if(obj[i] === 1) return i
    }
  }
console.log(singleNumber([2,2,1, 8, 1,10,10]))