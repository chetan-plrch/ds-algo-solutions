const { BinarySearchTree } = require('../../Datastructure/BinarySearchTree');

const arr = [20, 10, 5, 15, 13, 35, 30, 42];

arr.forEach((el, idx) => {
    const bSearchTree = new BinarySearchTree();

    arr.forEach((ele) => {
        bSearchTree.insert(ele);
    });

    const bSearchTreeRoot = bSearchTree.getRootNode();

    console.log('----', idx);
    bSearchTree.delete(bSearchTreeRoot, el);
    console.log('----');
    bSearchTree.traverseLevelOrder();
    console.log('----', idx);
})
