const Examples = require("../../utility/examples");

const findProduct = (root) => {
    if(root) {
        let lSum = findProduct(root.left);
        let rSum = findProduct(root.right);

        return root.val * lSum * rSum;
    }
    return 1;
}

const bTree = new Examples().getBinaryTree(4);
const bTreeRoot = bTree.getRootNode();
console.log(findProduct(bTreeRoot));