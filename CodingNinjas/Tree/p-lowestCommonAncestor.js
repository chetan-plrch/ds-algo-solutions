const binaryTree = require("../../utility/binaryTree");
const Examples = require("../../utility/examples");

const lowestCommonAncestor = (root, n1, n2, n3) => {
    const m = new Map();
    m.set(Number(n1).toString(), new Map());
    m.set(Number(n2).toString(), new Map());
    m.set(Number(n3).toString(), new Map());

    const commons = [];
    getAncestor(root, n1, n2, n3, m);

    console.log(m);
    for(let node of m.get(Number(n1).toString()).keys()) {
        if(m.get(Number(n2).toString()).has(node) && m.get(Number(n3).toString()).has(node))
        commons.push(node.val);
    }

    let min = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < commons.length; i++) {
        if(min > commons[i])
            min = commons[i];
    }

    return min;
}

const getAncestor = (root, n1, n2, n3, map) => {
    if(root) {
        // Base case
        const found = getAncestor(root.left, n1, n2, n3, map);
        const found1 = getAncestor(root.right, n1, n2, n3, map);

        let nodes = null;

        if(found && found1) {
            found.split(',').map((n) => {
                map.get(n).set(root);
            });

            found1.split(',').map((n) => {
                map.get(n).set(root);
            });

            nodes = found + ',' + found1;
        } else if(found) {
            found.split(',').map((n) => {
                map.get(n).set(root);
            });

            nodes = found;
        } else if(found1) {
            found1.split(',').map((n) => {
                map.get(n).set(root);
            });

            nodes = found1;
        }
        
        if((root.val === n1) || (root.val === n2) || (root.val === n3)) {
            if(nodes)
                return nodes + ',' + Number(root.val).toString();
            return Number(root.val).toString();
        } else if(nodes) {
          return nodes;  
        } else if(binaryTree.isLeafNode(root)) {
            return false;
        }
        
        // General case
        return false;
    }

    return false;
}

const bTree = new Examples().getBinaryTree();
const bTreeRoot = bTree.getRootNode();
// bTree.traverseLevelOrder();
// console.log('Lowest common ancestor :', lowestCommonAncestor(bTreeRoot, 24, 99, 23));

const bTree2 = new Examples().getBinaryTree(2);
const bTree2Root = bTree2.getRootNode();
// bTree2.traverseLevelOrder();
// console.log('Lowest common ancestor :', lowestCommonAncestor(bTree2Root, 9, 45, 1));
// console.log('Lowest common ancestor :', lowestCommonAncestor(bTree2Root, 9, 45, 3));
// console.log('Lowest common ancestor :', lowestCommonAncestor(bTree2Root, 9, 45, 4));

const bTree6 = new Examples().getBinaryTree(6);
const bTree6Root = bTree6.getRootNode();
// bTree6.traverseLevelOrder();
// console.log('Lowest common ancestor :', lowestCommonAncestor(bTree6Root, 10, 7, 3));