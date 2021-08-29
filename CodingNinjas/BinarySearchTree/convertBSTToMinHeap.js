const Examples = require('../../utility/examples');
const { BinaryTree, BinaryTreeNode } = require('../../Datastructure/BinaryTree');

const constructMinHeap = (root) => {
    const arr = [];
    collectElements(root, arr);
    console.log(arr)
    return makeMinHeap(root, arr, { index: 0 });
}

const collectElements = (root, arr) => {
    if(root) {
        collectElements(root.left, arr);
        arr.push(root.val);
        collectElements(root.right, arr);
    }
}

const makeMinHeap = (root, arr, data) => {
    if(root) {
        root.val = arr[data.index];
        data.index++;

        makeMinHeap(root.left, arr, data);
        makeMinHeap(root.right, arr, data);
    }
    return null;
}

const bTree = new Examples().getBinaryTree(12);
bTree.traverseLevelOrder();
bTree.setRootNode(constructMinHeap(bTree.getRootNode()));
console.log('--------');
bTree.traverseLevelOrder();
// bTree.traversePreOrder();