const Examples = require('../../utility/examples');
const mergeSort = require('../../Sorting/merge');

const constructBST = (root) => {
    return traverseInorderAndSet(root, mergeSort(traverseInorder(root, [])), { current: 0 });
}

const traverseInorder = (root, arr) => {
    if (root) {
        traverseInorder(root.left, arr);
        arr.push(root.val);
        traverseInorder(root.right, arr);
    }
    return arr;
}

const traverseInorderAndSet = (root, arr, index) => {
    if (root) {
        traverseInorderAndSet(root.left, arr, index);
        root.val = arr[index.current++];
        traverseInorderAndSet(root.right, arr, index);
    }
    return null;
}

const bTree = new Examples().getBinaryTree(3)
bTree.traverseLevelOrder();
constructBST(bTree.getRootNode());
bTree.traverseLevelOrder();