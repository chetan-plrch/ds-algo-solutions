/**
 * Find height in both recursive and iterative order.
 */

const Examples = require("../../utility/examples");

const findHeight = (root, height) => {
    if(root) {
        const hL = findHeight(root.left, height + 1);
        const hR = findHeight(root.right, height + 1);

        return Math.max(height, Math.max(hL, hR));
    }

    return 0;
}

const bTree = new Examples().getBinaryTree(4);
const bTreeRoot = bTree.getRootNode();
console.log(findHeight(bTreeRoot, 1));