const Examples = require("../../utility/examples");
const binaryTree = require("../../utility/binaryTree");

const levelSum = (root, level) => {
    return calculateLevelSum(root, 1, level);
}

const calculateLevelSum = (root, currentLevel, level) => {
    if(root) {
        // Base case
        if(currentLevel === level) {
            return root.val;
        }

        const lSum = calculateLevelSum(root.left, currentLevel + 1, level);
        const rSum = calculateLevelSum(root.right, currentLevel + 1, level);

        // General recursive case
        return lSum + rSum;
    }

    // Base case
    return 0;
}

const bTree = new Examples().getBinaryTree();
const bTreeRoot = bTree.getRootNode();
const level = 3;

console.log('Level sum of :', level, levelSum(bTreeRoot, level));