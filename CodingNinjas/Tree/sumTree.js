const Examples = require("../../utility/examples");
const binaryTree = require("../../utility/binaryTree");

const convertToSumTree = (root) => {
    if(root) {
        const lV = convertToSumTree(root.left);
        const rV = convertToSumTree(root.right);

        if(binaryTree.isLeafNode(root)) {
            let value = root.val;
            root.val = 0;
            return value;
        }
         
        root.val = lV + rV;
        return root.val;
    }
    return 0;
}

const bTree = new Examples().getBinaryTree();
const bTreeRoot = bTree.getRootNode();

convertToSumTree(bTreeRoot);
bTree.traverseLevelOrder();