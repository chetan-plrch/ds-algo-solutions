const binaryTree = require("../../utility/binaryTree");
const Examples = require("../../utility/examples");

const checkBalanced = (root) => {
    if(root) {
        if(binaryTree.isLeafNode(root)) {
            return [true, 1];
        }

        const [lBalanced, leftHeight] = checkBalanced(root.left);
        const [rBalanced, rightHeight] = checkBalanced(root.right);

        if(Math.abs(leftHeight - rightHeight) <= 1) {
            return [lBalanced && rBalanced, Math.max(leftHeight, rightHeight) + 1];
        }
        console.log(root.val, leftHeight, rightHeight);
        return [false, Math.max(leftHeight, rightHeight) + 1];
    }
    return [true, 0];
}

const bTree = new Examples().getBinaryTree(4);
console.log(checkBalanced(bTree.getRootNode()));
bTree.traverseLevelOrder();