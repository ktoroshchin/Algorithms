/** 
 * Given a m x n matrix grid which is sorted in non-increasing order 
 * both row-wise and column-wise, return the number of negative numbers in grid.
 
    Example 1:

    Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
    Output: 8
    Explanation: There are 8 negatives number in the matrix.

    Example 2:

    Input: grid = [[3,2],[1,0]]
    Output: 0
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
// Binary search method
 const countNumsInSortedMatrix = function(grid) {
     let result = 0

     const binarySearch = (arr) => {
        let start = 0
        let end = arr.length - 1

        while(start <= end) {
            let mid = Math.floor((start + end) / 2)
            
            if(arr[mid] < 0) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return start
     }

     for(let i = 0; i < grid.length; i++) {
        let indexFirstNegative = binarySearch(grid[i])
        result += grid[i].length - indexFirstNegative
     }

     return result
};

const countNumsInSortedMatrix2 = (grid) => {
    let result = 0
    grid.forEach(arr => {
        let negative = arr.filter(num => num < 0)
        result += negative.length
    })
    
    return result
}

console.log(countNumsInSortedMatrix([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))
console.log(countNumsInSortedMatrix2([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))