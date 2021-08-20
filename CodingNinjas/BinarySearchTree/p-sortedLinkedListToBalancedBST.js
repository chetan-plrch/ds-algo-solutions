const Examples = require('../../utility/examples');
const { getBaseLog } = require('../../utility/binaryTree');
const { BinaryTree, BinaryTreeNode } = require('../../Datastructure/BinaryTree');

/**
 * Approach 1 is defined below 
 * --and--
 * Approach 2 is by using low and high method similar to binary search
 */

/**
 * Array is assumed as sorted linkedlist
 * @param {*} linkedList
 */
const constructBinaryTree = (linkedList) => {
    const length = linkedList.reduce((acc) => acc + 1, 0);
    const completeHeight = Math.floor(getBaseLog(2, length + 1));
    const completeNodes = Math.pow(2, completeHeight) - 1;
    const nextLevelNodes = length - completeNodes;
    const nextLevelHeight = completeHeight + 1;

    return construct(
        linkedList,
        1,
        {
            index: 0,
            lastLevel: nextLevelHeight,
            lastLevelNodes: nextLevelNodes
        }
    );
}

const construct = (linkedList, height, data) => {
    if(linkedList[data.index] !== undefined) {
        if (height < data.lastLevel) {

            const left = construct(linkedList, height + 1, data);
            const node = new BinaryTreeNode(linkedList[data.index++]);
            const right = construct(linkedList, height + 1, data);

            node.left = left;
            node.right = right;

            return node;
        } else if((height === data.lastLevel) && (data.lastLevelNodes > 0)) {
            data.lastLevelNodes--;

            const left = construct(linkedList, height + 1, data);
            const node = new BinaryTreeNode(linkedList[data.index++]);
            const right = construct(linkedList, height + 1, data);

            node.left = left;
            node.right = right;

            return node;
        }
    }
    return null;
}

const traversal = new Examples().getTraversal(4);
const bTree = new BinaryTree();
bTree.setRootNode(constructBinaryTree(traversal.preOrder.sort((a, b) => a - b)));
bTree.traverseLevelOrder();
