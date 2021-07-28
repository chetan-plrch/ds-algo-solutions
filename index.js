const { BinaryTree } = require('./Datastructure/BinaryTree')
const { LinkedHashMap } = require('./Datastructure/LinkedHashMap');
const { printAllLeafNodes, traverseLeafNodes } = require('./BinaryTree/leafTraversal');
const { printLeftExtremeUsingLevel } = require('./BinaryTree/leftExtremeEdges');
const { traverseLeftEdge, traverseRightEdge } = require('./BinaryTree/edgeTraversal');
const Examples = require('./utility/examples')

const checkVerticalTraversal = () => {
    // Do vertical order traversal
}

const testLinkedHashMap = () => {
    const m = new LinkedHashMap();
    m.set('a', 1);
    m.set('b', 2);
    m.set('c', 3);
    m.set('d', 4);
    m.set('e', 5);

    for (let v of m.iterator()) {
        console.log(v);
    }
}

const testLeafNodes = () => {
    const root = new Examples().getBinaryTree();
    printAllLeafNodes(root);
}

const testExtremeEdge = () => {
    const root = new Examples().getBinaryTree();
    printLeftExtremeUsingLevel(root);
}

const start = () => {
    let arr = new Array();
    traverseLeftEdge(new Examples().getBinaryTree(), arr);
    traverseLeafNodes(new Examples().getBinaryTree(), arr);
    traverseRightEdge(new Examples().getBinaryTree().right, arr);

    console.log('Values', arr);
}

start();