const Examples = require("../../utility/examples");
const binaryTree = require("../../utility/binaryTree");

const largestNumberFromBinaryTree = (root) => {
    if(root) {
        // Base case
        if(binaryTree.isLeafNode(root)) {
            return root.val;
        }

        const lMax = largestNumberFromBinaryTree(root.left);
        const rMax = largestNumberFromBinaryTree(root.right);

        // Recursive case
        return Math.max(Math.max(lMax, rMax), root.val);
    }

    // Base case
    return 0;
}

const bTree = new Examples().getBinaryTree(5);
const bTreeRoot = bTree.getRootNode();

bTree.traverseLevelOrder();

console.log('Largest number:', largestNumberFromBinaryTree(bTreeRoot));
