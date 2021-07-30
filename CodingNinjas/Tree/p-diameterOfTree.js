// TODO: Go through all the solutions for this problem

const binaryTree = require("../../utility/binaryTree");
const Examples = require("../../utility/examples");

const diameterOfTree = (root) => {
    totalNodes(root);
    return findMax(root);
}

const findMax = (root) => {
    if(root) {
        const lTotal = findMax(root.left);
        const rTotal = findMax(root.right);

        const total = root.val.split(',').reduce((acc, cur) => acc + Number(cur), 0);
        return Math.max(Math.max(lTotal, rTotal), total);
    }
    return 0;
}

const totalNodes = (root) => {
    if(root) {
        if(binaryTree.isLeafNode(root)) {
            root.val = '0';
            return 0;
        }

        const lTotal = totalNodes(root.left);
        const rTotal = totalNodes(root.right);

        if(lTotal > rTotal) {
            root.val = (lTotal + 1) + ',' + (rTotal + 1);
            return lTotal + 1;
        } else {
            root.val = (rTotal + 1) + ',' + (lTotal + 1);
            return rTotal + 1;
        }
    }

    return -1;
}

const bTree = new Examples().getBinaryTree();
const bTreeRoot = bTree.getRootNode();
bTree.traverseLevelOrder();
console.log('Diameter of the tree:', diameterOfTree(bTreeRoot));

const bTree2 = new Examples().getBinaryTree(2);
const bTree2Root = bTree2.getRootNode();
bTree2.traverseLevelOrder();
console.log('Diameter of the tree:', diameterOfTree(bTree2Root));

const bTree3 = new Examples().getBinaryTree(3);
const bTree3Root = bTree3.getRootNode();
bTree3.traverseLevelOrder();
console.log('Diameter of the tree:', diameterOfTree(bTree3Root));

const bTree4 = new Examples().getBinaryTree(4);
const bTree4Root = bTree4.getRootNode();
bTree4.traverseLevelOrder();
console.log('Diameter of the tree:', diameterOfTree(bTree4Root));

const bTree5 = new Examples().getBinaryTree(5);
const bTree5Root = bTree5.getRootNode();
bTree5.traverseLevelOrder();
console.log('Diameter of the tree:', diameterOfTree(bTree5Root));

const bTree6 = new Examples().getBinaryTree(6);
const bTree6Root = bTree6.getRootNode();
bTree6.traverseLevelOrder();
console.log('Diameter of the tree:', diameterOfTree(bTree6Root));

const bTree7 = new Examples().getBinaryTree(7);
const bTree7Root = bTree7.getRootNode();
bTree7.traverseLevelOrder();
console.log('Diameter of the tree:', diameterOfTree(bTree7Root));

const bTree8 = new Examples().getBinaryTree(8);
const bTree8Root = bTree8.getRootNode();
bTree8.traverseLevelOrder();
console.log('Diameter of the tree:', diameterOfTree(bTree8Root));