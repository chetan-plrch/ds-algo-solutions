const binaryTree = require("../../utility/binaryTree");
const Examples = require("../../utility/examples");

/**
 * Logic:
 * 
 * Approach 1:
 * 1. A node shouldn't have a  only right child
 * 2. Having a leaf node or only left child marks the tree end at that level.
 * 3. Check the level difference after the treeEnd, should not be more than 1
 * 
 * Approach 2:
 * 1. Traverse the tree in the level order
 * 2. Check for the null nodes in between
 * 
 * Approach 3:
 * 1. Collect the nodes level wise.
 * 2. Parse each level and check the count
 * 3. Parse the (n-1)th level with check in nth level
 */
const checkComplete = (root, level, data) => {
    if(root) {
        let valid = true;
        if(binaryTree.isLeafNode(root)) {
            if (data.treeEnd && level > data.endLevel) {
                valid = false;
            } else if(data.levelEnd && level >= data.endLevel) {
                valid = false;
            } else if((data.treeEnd || data.endLevel) && (Math.abs(data.endLevel - level) > 1)) {
                valid = false;
            } else {
                data.treeEnd = true;
                data.endLevel = level;
            }
        } else if(binaryTree.hasOnlyLeftChild(root)) {
            if (data.treeEnd && level > data.endLevel) {
                valid = false;
            } else if(data.levelEnd && level >= data.endLevel) {
                valid = false;
            } else {
                data.levelEnd = true;
                data.treeEnd = true;
                data.endLevel = level;
            }
        } else if(binaryTree.hasOnlyRightChild(root)) {
            valid = false;
        }

        const validLeft = checkComplete(root.left, level + 1, data);
        const validRight = checkComplete(root.right, level + 1, data);

        return valid && validLeft && validRight;
    }
    return true;
}

new Array(13).fill(0).forEach((ele, index) => {
    const bTree = new Examples().getBinaryTree(index + 1);
    console.log('Is complete:', index + 1, ' ', checkComplete(bTree.getRootNode(), 0, {}));
    bTree.traverseLevelOrder();
    console.log('---- ---- ----');   
});

