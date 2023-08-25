const array1 = [2,2,2,1]
const array2 = [3,4,5,2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    const result = []
    const cache = {}

    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            if(nums1[i] === nums2[j]) {
                result.push(nums1[i])
                nums2.splice(j, 1)
            }
        }
    }
    
    return result
};

console.log(intersect(array1, array2))