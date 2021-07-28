const { traverseLeftEdge, traverseRightEdge } = require('../../BinaryTree/edgeTraversal');
const { traverseLeafNodes } = require('../../BinaryTree/leafTraversal');
const Examples = require('../../utility/examples');

const boundryTraversal = () => {
    const arr = new Array();
    const bTree = new Examples().getBinaryTree();

    traverseLeftEdge(bTree, arr);
    traverseLeafNodes(bTree, arr);
    traverseRightEdge(bTree.right, arr);

    console.log('Values', arr);
}

boundryTraversal();