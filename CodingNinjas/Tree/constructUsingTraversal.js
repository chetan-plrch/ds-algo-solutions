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
    if(rootEle) {
        const root = new BinaryTreeNode(rootEle);

        if(inOrderMin >= inOrderMax) {
            return root;
        }

        const lInorder = inOrder.slice(inOrderMin, inOrderMap[rootEle]);
        const rInorder = inOrder.slice(inOrderMap[rootEle] + 1, inOrderMax);

        const lRoot = preOrder.find((ele) => ((inOrderMap[ele] >= inOrderMin) && (inOrderMap[ele] < inOrderMap[rootEle])));
        const rRoot = preOrder.find((ele) => ((inOrderMap[ele] > inOrderMap[rootEle]) && (inOrderMap[ele] <= inOrderMax)));

        root.left = traverseTree(
            lRoot,
            preOrder,
            lInorder,
            inOrderMin,
            inOrderMap[rootEle] - 1,
            inOrderMap
        );

        root.right = traverseTree(
            rRoot,
            preOrder,
            rInorder,
            inOrderMap[rootEle] + 1,
            inOrderMax,
            inOrderMap
        );

        if(binaryTree.isLeafNode(root))
            return root;
        return root;
    }
    return null;
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
    inOrder: [9, 3, 45, 23, 1, 98, 2, 12, 4, 67, 26, 99, 25, 90, 24, 55, 7]
}

const b1 = new BinaryTree();
b1.setRootNode(constructTree(example3.preOrder, example3.inOrder));

b1.traverseLevelOrder();

console.log(b1.getRootNode());