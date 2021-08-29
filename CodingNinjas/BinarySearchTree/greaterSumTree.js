const Examples = require('../../utility/examples');

const greaterSumTree = (root, data) => {
    if(root) {
        greaterSumTree(root.right, data);

        const sum = data.sum
        data.sum = root.val + data.sum;
        root.val = sum;
    
        greaterSumTree(root.left, data);
    }
    return null;
}

const bTree = new Examples().getBinaryTree(12);
bTree.traverseLevelOrder();
greaterSumTree(bTree.getRootNode(), { sum: 0 });
console.log('--------');
bTree.traverseLevelOrder();