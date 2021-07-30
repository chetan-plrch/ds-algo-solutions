// Returns [[node1, node2], path-sum]

const binaryTree = require("../../utility/binaryTree");
const Examples = require("../../utility/examples");

const largestPath = (root) => {
    const m = new Map();
    const store = [Number.MIN_SAFE_INTEGER, -1];

    maxSumToRoot(root, m);

    findMaxNodes(root, m, store);

    let leftChild = findMaxChild(store[1].left, m);
    let rightChild = findMaxChild(store[1].right, m);

    if (leftChild && rightChild) {
        return [leftChild.val, rightChild.val];
    } else if(!leftChild && !rightChild) {
        return [store[1].val, store[1].val];
    } else if(leftChild) {
        return [leftChild.val, store[1].val];
    } else if(rightChild) {
        return [store[1].val, rightChild.val];
    }

    return [-1, -1];
}

const findMaxNodes = (root, m, store) => {
    if(root) {
        const [max,] = store;
        if(root.left && root.right) {
            if(m.get(root.left) > m.get(root.right)) {
                let rightSum = m.get(root) + m.get(root.right);
                if(max < rightSum) {
                    store[0] = rightSum;
                    store[1] = root;
                }
            } else {
                let leftSum = m.get(root) + m.get(root.left);
                if(max < leftSum) {
                    store[0] = leftSum;
                    store[1] = root;
                }
            }
        } else if(root.left) {
            if(max < m.get(root)) {
                store[0] = m.get(root);
                store[1] = root;
            }
        } else if(root.right) {
            if(max < m.get(root)) {
                store[0] = m.get(root);
                store[1] = root;
            }
        }

        findMaxNodes(root.left, m, store);
        findMaxNodes(root.right, m, store);
    }
}

const findMaxChild = (root, m) => {
    if(root) {
        if(binaryTree.isLeafNode(root)) {
            return root;
        } else if(!root.left) {
            return findMaxChild(root.right, m);
        } else if(!root.right) {
            return findMaxChild(root.left, m);
        } else {
            if(m.get(root.left) >= m.get(root.right)) {
                return findMaxChild(root.left, m);
            } else {
                return findMaxChild(root.right, m);
            }
        }
    }
    return null;
}

const maxSumToRoot = (root, m) => {
    if(root) {
        // Base case
        if(binaryTree.isLeafNode(root)) {
            m.set(root, root.val);
            return root.val;
        }

        let lSum = maxSumToRoot(root.left, m);
        let rSum = maxSumToRoot(root.right, m);

        // General case
        m.set(root, Math.max(lSum, rSum) + root.val);
        return m.get(root);
    }
    return 0;
}

const bTree = new Examples().getBinaryTree(6);
const bTreeRoot = bTree.getRootNode();

bTree.traverseLevelOrder();

console.log('Largest number:', largestPath(bTreeRoot));

bTree.traverseLevelOrder();