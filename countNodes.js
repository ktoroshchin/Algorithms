/**
 * Definition for a binary tree node.
 * Problem link https://leetcode.com/problems/count-complete-tree-nodes/description/
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root, count = 0) {
    if(!root) return count
    count += 1

    if(!root.left && !root.right) return count

    if(root.left) {
        count = countNodes(root.left, count)
    }
    if(root.right) {
        count = countNodes(root.right, count)
    }

    return count;
};
