const { BinaryTreeNode, BinaryTree } = require("../../Datastructure/BinaryTree");
const binaryTree = require("../../utility/binaryTree");

const constructTree = (preOrder, inOrder) => {
    const inOrderMap = inOrder.reduce((acc, cur, idx) => {
        acc[cur] = idx;
        return acc;
    }, {});

    return traverseTree(preOrder[0], preOrder, inOrder, 0, inOrder.length, inOrderMap);
}

const traverseTree = (rootEle, preOrder, inOrder, inOrderMin, inOrderMax, inOrderMap) => {
    if (rootEle) {
        const root = new BinaryTreeNode(rootEle);

        if (inOrderMin >= inOrderMax) {
            return root;
        }

        const lRoot = preOrder.find((ele) => ((inOrderMap[ele] >= inOrderMin) && (inOrderMap[ele] < inOrderMap[rootEle])));
        const rRoot = preOrder.find((ele) => ((inOrderMap[ele] > inOrderMap[rootEle]) && (inOrderMap[ele] <= inOrderMax)));

        root.left = traverseTree(
            lRoot,
            preOrder,
            inOrder,
            inOrderMin,
            inOrderMap[rootEle] - 1,
            inOrderMap
        );

        root.right = traverseTree(
            rRoot,
            preOrder,
            inOrder,
            inOrderMap[rootEle] + 1,
            inOrderMax,
            inOrderMap
        );

        if (binaryTree.isLeafNode(root))
            return root;
        return root;
    }
    return null;
}

const constructTreeUsingPreOrder = (preOrder, inOrder) => {
    const inOrderMap = inOrder.reduce((acc, cur, idx) => {
        acc[cur] = idx;
        return acc;
    }, {});

    const pIndex = [0];

    return traverseTreeUsingPreOrder(0, inOrder.length - 1, inOrderMap, pIndex, preOrder);
}

const traverseTreeUsingPreOrder = (startIndex, endIndex, inOrderMap, pIndex, preOrder) => {
    if (startIndex > endIndex) {
        return null;
    }

    const rootEle = preOrder[pIndex[0]];
    const root = new BinaryTreeNode(rootEle);

    pIndex[0] = pIndex[0] + 1;

    if (startIndex === endIndex) {
        return root;
    } else {
        const inOrderIndex = inOrderMap[root.val];

        root.left = traverseTreeUsingPreOrder(startIndex, inOrderIndex - 1, inOrderMap, pIndex, preOrder);
        root.right = traverseTreeUsingPreOrder(inOrderIndex + 1, endIndex, inOrderMap, pIndex, preOrder);

        return root;
    }
}

const constructTreeUsingPostOrder = (postOrder, inOrder) => {
    const inOrderMap = inOrder.reduce((acc, cur, idx) => {
        acc[cur] = idx;
        return acc;
    }, {});

    const pIndex = [inOrder.length - 1];

    return traverseTreeUsingPostOrder(0, inOrder.length - 1, inOrderMap, pIndex, postOrder);
}

const traverseTreeUsingPostOrder = (startIndex, endIndex, inOrderMap, pIndex, postOrder) => {
    if (startIndex > endIndex) {
        return null;
    }

    const rootEle = postOrder[pIndex[0]];
    const root = new BinaryTreeNode(rootEle);

    pIndex[0] = pIndex[0] - 1;

    if (startIndex === endIndex) {
        return root;
    } else {
        const inOrderIndex = inOrderMap[root.val];

        root.right = traverseTreeUsingPostOrder(inOrderIndex + 1, endIndex, inOrderMap, pIndex, postOrder);
        root.left = traverseTreeUsingPostOrder(startIndex, inOrderIndex - 1, inOrderMap, pIndex, postOrder);
    
        return root;
    }
}

const example = {
    preOrder: [1, 2, 4, 7, 3],
    inOrder: [4, 2, 7, 1, 3],
}

const example2 = {
    preOrder: [1, 2, 3],
    inOrder: [2, 1, 3],
}

const example3 = {
    preOrder: [67, 98, 23, 3, 9, 45, 1, 12, 2, 4, 90, 99, 26, 25, 55, 24, 7],
    inOrder: [9, 3, 45, 23, 1, 98, 2, 12, 4, 67, 26, 99, 25, 90, 24, 55, 7],
    postOrder: [9, 45, 3, 1, 23, 2, 4, 12, 98, 26, 25, 99, 24, 7, 55, 90, 67]
}

const b1 = new BinaryTree();
// b1.setRootNode(constructTreeUsingPreOrder(example3.preOrder, example3.inOrder));
b1.setRootNode(constructTreeUsingPostOrder(example3.postOrder, example3.inOrder));

b1.traverseLevelOrder();
// b1.traversePostOrder();

console.log(b1.getRootNode());