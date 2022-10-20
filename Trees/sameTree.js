/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// use DFS method to check if the trees and all subtrees within those trees are equal
 var isSameTree = function(p, q) {
    //base case - if both nodes are null, they're the same. If we hit a leaf node, we can return true
    if(p == null && q == null){
        return true;
    }
    //base case - if ONLY one node is null, then they're not the same tree
    if(p == null || q == null){
        return false;
    }
    //base case - if the values at each node are not the same, return false
    if(p.val != q.val){
        return false;
    }
    //return result of examing both LEFT and RIGHT subtrees, using the logical AND operator to ensure both sides
    //are the same
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};