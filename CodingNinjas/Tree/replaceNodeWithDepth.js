const Examples = require("../../utility/examples");
const binaryTree = require("../../utility/binaryTree");

const replaceNodeWithDepth = (root, level) => {
    if(root) {
        replaceNodeWithDepth(root.left, level + 1);
        replaceNodeWithDepth(root.right, level + 1);
        root.val = level;
    }
}

const bTree = new Examples().getBinaryTree();
const bTreeRoot = bTree.getRootNode();

replaceNodeWithDepth(bTreeRoot, 1);
bTree.traverseLevelOrder();