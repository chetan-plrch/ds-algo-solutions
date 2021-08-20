const { BinarySearchTree } = require('../../Datastructure/BinarySearchTree');
const Examples = require('../../utility/examples');

const arr = new Examples().getTraversal(3).preOrder;

// arr.forEach((el, idx) => {
    const bSearchTree = new BinarySearchTree();

    arr.forEach((ele) => {
        bSearchTree.insert(ele);
    });

    const bSearchTreeRoot = bSearchTree.getRootNode();

    // console.log('----', idx);
    // bSearchTree.delete(bSearchTreeRoot, el);
    console.log('----');
    bSearchTree.traversePreOrder();
    bSearchTree.traverseLevelOrder();
    // console.log('----', idx);
// });
