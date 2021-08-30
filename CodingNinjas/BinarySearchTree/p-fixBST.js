const Examples = require('../../utility/examples');

const fixBST = (root) => {
    if(root) {
        fixBST(root.right);
        fixBST(root.left);
    }
    return null;
}

const bTree = new Examples().getBinaryTree(12);
bTree.traverseLevelOrder();
fixBST(bTree.getRootNode());
console.log('--------');
bTree.traverseLevelOrder();