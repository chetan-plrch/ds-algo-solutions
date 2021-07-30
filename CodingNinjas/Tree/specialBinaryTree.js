/**
 * Special tree: A tree with 0 or 2 child is special binary tree
 */

const Examples = require("../../utility/examples");
const binaryTree = require("../../utility/binaryTree");

const checkSpecialTree = (root) => {
    if(root) {
        let lCheck = checkSpecialTree(root.left);
        let rCheck = checkSpecialTree(root.right);

        if(binaryTree.isLeafNode(root))
            return true;
        else if(root.left && !root.right)
            return false
        else if(!root.left && root.right)
            return false
        else
            return (root.left && root.right) && lCheck && rCheck;
    }
    return true;
}

const bTree = new Examples().getBinaryTree(4);
const bTreeRoot = bTree.getRootNode();

console.log('Is special: ', checkSpecialTree(bTreeRoot));