// Check if the binary search tree is valid
const binaryTree = require('../../utility/binaryTree');
const Examples = require('../../utility/examples');

const validateBST = (root, isLeft) => {
    if(root) {
        // Base case
        if(binaryTree.isLeafNode(root)) {
            return [true, root];
        } 

        const [lMaxValid, lMax] = validateBST(root.left, true);
        const [rMinValid, rMin] = validateBST(root.right, false);

        let isValidNode = true;
        if(lMax && rMin)
            isValidNode = (binaryTree.getMinNode(lMax, root) === lMax) && (binaryTree.getMaxNode(rMin, root) === rMin);
        else if(lMax)
            isValidNode = binaryTree.getMinNode(lMax, root) === lMax;
        else if(rMin)
            isValidNode = binaryTree.getMaxNode(rMin, root) === rMin;
        
        let areSubtreesValid = lMaxValid && rMinValid;
        let isValidTree = isValidNode && areSubtreesValid;

        if(isLeft) {
            if(lMax && rMin) {
                return [isValidTree, binaryTree.getMaxNode(root, binaryTree.getMaxNode(lMax, rMin))];
            } else if(lMax) {
                return [isValidTree, binaryTree.getMaxNode(root, lMax)];
            } else {
                return [isValidTree, binaryTree.getMaxNode(root, rMin)];
            }
        } else if(isLeft === false) {
            if(lMax && rMin) {
                return [isValidTree, binaryTree.getMinNode(root, binaryTree.getMinNode(lMax, rMin))];
            } else if(lMax) {
                return [isValidTree, binaryTree.getMinNode(root, lMax)];
            } else {
                return [isValidTree, binaryTree.getMinNode(root, rMin)];
            }
        }

        return [isValidTree, root];
    }
    return [true, null];
}

const it = new Examples().iterator();
let i = 1;
for(let binaryTree of it) {
    console.log('-----------------')
    console.log('Binary Tree: ', i++);
    const binaryTreeRoot = binaryTree.getRootNode();
    binaryTree.traverseLevelOrder();

    console.log('BST is valid: ', validateBST(binaryTreeRoot)[0]);
    console.log('-----------------')
}