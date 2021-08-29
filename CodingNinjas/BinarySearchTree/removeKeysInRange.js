const Examples = require('../../utility/examples');
const { BinaryTree, BinaryTreeNode } = require('../../Datastructure/BinaryTree');

const removeKeyFromRange = (root, min, max) => {
    if(root) {
        root.left = removeKeyFromRange(root.left, min, max);
        root.right = removeKeyFromRange(root.right, min, max);

        if (root.val < min) {
            return root.right;
        }

        if (root.val > max) {
            return root.left;
        }

        return root;
    }
    return null;
}

const bTree = new Examples().getBinaryTree(12);
bTree.traverseLevelOrder();
bTree.setRootNode(removeKeyFromRange(bTree.getRootNode(), 20, 30));
console.log('--------');
bTree.traverseLevelOrder();