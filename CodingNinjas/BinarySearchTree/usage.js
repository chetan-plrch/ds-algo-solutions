const { BinarySearchTree } = require('../../Datastructure/BinarySearchTree');

const arr = [20, 10, 5, 15, 13, 35, 30, 42];
const bSearchTree = new BinarySearchTree();

arr.forEach((ele) => {
    bSearchTree.insert(ele);
});

const bSearchTreeRoot = bSearchTree.getRootNode();

bSearchTree.traverseLevelOrder();

// console.log(bSearchTree.search(35));
// console.log(bSearchTree.min());
// console.log(bSearchTree.findMin(bSearchTreeRoot, { val: Number.MAX_SAFE_INTEGER }));
// console.log(bSearchTree.max());
console.log('----');
bSearchTree.delete(bSearchTreeRoot, 20);
console.log('----');

bSearchTree.traverseLevelOrder();