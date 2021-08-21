const Examples = require('../../utility/examples');
const { BinaryTree } = require('../../Datastructure/BinaryTree');

const constructMinHeap = (root) => {

}

const bTree = new Examples().getBinaryTree(12);
constructMinHeap(bTree.getRootNode());
bTree.traverseLevelOrder();
bTree.traversePreOrder();