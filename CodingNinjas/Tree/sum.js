const Examples = require("../../utility/examples");

const findSum = (root) => {
    if(root) {
        let lSum = findSum(root.left);
        let rSum = findSum(root.right);

        return root.val + lSum + rSum;
    }
    return 0;
}

const bTree = new Examples().getBinaryTree(4);
const bTreeRoot = bTree.getRootNode();
console.log(findSum(bTreeRoot));