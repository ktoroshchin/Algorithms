/**
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 const containsDuplicate = function(nums) {
    const serR = new Set(nums)
    return serR.size !== nums.length

    //------ITERATIVE METHOD------

    // let obj = {
        
    // }
    // for(let i = 0; i < nums.length; i++) {
    //     let value = nums[i]
    //     if(obj[value]) return true
        
    //     obj[value] = 1
    // }
    
    // return false
};

console.log(containsDuplicate([1,2,2,3]))