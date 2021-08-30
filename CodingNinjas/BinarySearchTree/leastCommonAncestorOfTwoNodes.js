const Examples = require('../../utility/examples');

const lca = (root, data) => {
    if(root) {
        const lFound = lca(root.left, data);
        const rFound = lca(root.right, data);
        let found = lFound + rFound;

        if((root.val === data.first) || (root.val === data.second)) {
            if(!found.includes(root.val))
                found = root.val + found;
        }

        if(found.includes(data.first) && found.includes(data.second)) {
            if(!data.ancestor)
                data.ancestor = root.val;
            else if(data.ancestor > root.val)
                data.ancestor = root.val;
        }

        return found;
    }
    return '';
}

const bTree = new Examples().getBinaryTree(12);
bTree.traverseLevelOrder();
console.log('--------');
const data = {
    first: 20,
    second: 35,
    ancestor: null
};
lca(bTree.getRootNode(), data);
console.log(data);
console.log('--------');
bTree.traverseLevelOrder();