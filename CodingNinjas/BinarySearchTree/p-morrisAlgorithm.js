const Examples = require('../../utility/examples');

const morriesTraversal = (root) => {
    let cur = root;

    while(cur) {
        if(!cur.left) {
            console.log(cur.val);
            cur = cur.right;
        } else {
            const prev = findPrevious(cur.left, cur);
            if(!prev.right) {
                prev.right = cur;
                cur = cur.left;
            } else {
                prev.right = null;
                console.log(cur.val);
                cur = cur.right;
            }
        }
    }
}

const findPrevious = (root, cur) => {
    if(root) {
        if(!root.right || (root.right === cur))
            return root;

        return findPrevious(root.right, cur);
    }
    return null;
}

const bTree = new Examples().getBinaryTree(12);
bTree.traverseLevelOrder();
morriesTraversal(bTree.getRootNode());
// console.log(findPrevious(bTree.getRootNode()));
console.log('--------');
bTree.traverseLevelOrder();