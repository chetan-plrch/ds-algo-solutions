const Examples = require('../../utility/examples');
const mergeSort = require('../../Sorting/merge');
const { BinaryTreeNode, BinaryTree } = require('../../Datastructure/BinaryTree');

const constructSimpleTree = (arr) => {
    console.log(mergeSort(arr));
    return constructTree(arr, 0, Math.ceil((arr.length - 1)/ 2), arr.length - 1);
}

const constructTree = (arr, low, mid, high) => {
    if ((mid >= low) && (mid <= high)) {
        return new BinaryTreeNode(
            arr[mid],
            constructTree(arr, low, Math.ceil((low + mid - 1) / 2), mid - 1),
            constructTree(arr, mid + 1, Math.ceil((mid + high + 1) / 2), high),
        );
    }
    return null;
}

const bTree = new Examples().getTraversal(3);

const newBTree = new BinaryTree();
newBTree.setRootNode(constructSimpleTree(bTree.inOrder));
newBTree.traverseLevelOrder();