/*
Return the root node of a binary search tree that matches the given preorder traversal.

(Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

Example 1:

Input: [8,5,1,7,10,12]
Output: [8,5,10,1,7,null,12]

*/

var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0])
    for (let i = 1; i < preorder.length; i++) {
        appendToTreeNode(root, preorder[i])
    }
    return root
};

function appendToTreeNode(root, val) {
    if (val <= root.val) {
        if (root.left) appendToTreeNode(root.left,val);
        else root.left = new TreeNode(val);
    } else {
        if (root.right) appendToTreeNode(root.right,val);
        else root.right = new TreeNode(val);
    }
}