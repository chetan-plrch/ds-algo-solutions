const binaryTree = require("../../utility/binaryTree");
const Examples = require("../../utility/examples");

const checkComplete = (root) => {
    if(root) {
        if(binaryTree.isLeafNode(root)) {
            return [true, 1];
        }

        const [lBalanced, leftHeight] = checkComplete(root.left);
        const [rBalanced, rightHeight] = checkComplete(root.right);

        if(Math.abs(leftHeight - rightHeight) <= 1) {
            return [lBalanced && rBalanced, Math.max(leftHeight, rightHeight) + 1];
        }
        console.log(root.val, leftHeight, rightHeight);
        return [false, Math.max(leftHeight, rightHeight) + 1];
    }
    return [true, 0];
}

const bTree = new Examples().getBinaryTree(4);
console.log(checkComplete(bTree.getRootNode()));
bTree.traverseLevelOrder();