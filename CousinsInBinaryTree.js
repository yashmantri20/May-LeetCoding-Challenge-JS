/*In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.
Two nodes of a binary tree are cousins if they have the same depth, but have different parents.
We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.
Return true if and only if the nodes corresponding to the values x and y are cousins.

Note:

The number of nodes in the tree will be between 2 and 100.
Each node has a unique integer value from 1 to 100.*/


var isCousins = function(root, x, y) {
    const depths = []
    const cousinsParents = [];

    (function traverse(node, depth, parent) {
        if (!node) return
        if (node.val === x || node.val === y) {
            cousinsParents.push(parent)
            depths.push(depth)
        }
        node.left && traverse(node.left, depth + 1, node.val)
        node.right && traverse(node.right, depth + 1, node.val)
    })(root, 1, root.val)
    
    if (depths.length !== cousinsParents.length) return false
    
    return (depths[0] === depths[1]) && 
        (cousinsParents[0] !== cousinsParents[1])
};