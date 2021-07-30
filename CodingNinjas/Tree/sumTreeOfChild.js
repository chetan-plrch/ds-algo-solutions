const Examples = require("../../utility/examples");
const binaryTree = require("../../utility/binaryTree");

const convertToSumTree = (root) => {
    if(root) {
        if(binaryTree.isLeafNode(root)) {
            root.val = 0;
        } else {
            let lV = root.left ? root.left.val : 0;
            let rV = root.right ? root.right.val : 0;
            root.val = lV + rV;
        }

        const lV = convertToSumTree(root.left);
        const rV = convertToSumTree(root.right);
    }
}

const bTree = new Examples().getBinaryTree();
const bTreeRoot = bTree.getRootNode();

bTree.traverseLevelOrder();
console.log('---');
convertToSumTree(bTreeRoot);
bTree.traverseLevelOrder();