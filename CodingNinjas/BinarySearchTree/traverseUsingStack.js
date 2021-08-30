const Examples = require('../../utility/examples');
const binaryTree = require('../../utility/binaryTree');
const { Stack } = require('../../Datastructure/dynamicStackImplementationUsingArray');

/**
 * Logic:
 * 1. 
 */

const bstIteratorPreOrder = (root) => {
    if(root) {
        let s = new Stack();
        s.push(root);

        while(!s.isEmpty()) {
            const top = s.peek();
            console.log(top.val);

            if(binaryTree.isLeafNode(top)) {
                let node = s.pop();
                while((s.peek() && node === s.peek().right) ||
                (s.peek() && (node === s.peek().left && !s.peek().right)))
                    node = s.pop();
                if(s.peek() && node === s.peek().left)
                    s.push(s.peek().right);
            } else if(top.left) {
                s.push(top.left);
            } else {
                s.push(top.right);
            }
        }
    }
    return null;
}

const bstIteratorWithTreeModified = (root) => {
    if(root) {
        let s = new Stack();
        s.push(root);

        while(!s.isEmpty()) {
            while(s.peek() && (s.peek().left || s.peek().right)) {
                if(s.peek().left)
                    s.push(s.peek().left);
                else
                    s.push(s.peek().right);
            }

            const node = s.pop();
            console.log(node.val);

            if(s.peek() && s.peek().left === node)
                s.peek().left = null;

            if(s.peek() && s.peek().right === node)
                s.peek().right = null;
        }
    }
    return null;
}

class BstIterator {
    stack = new Stack();

    constructor(root) {
        this.leftMostTree(root);
    }

    leftMostTree = (root) => {
        if(root) {
            this.stack.push(root);
            this.leftMostTree(root.left);
        }
        return null;
    };

    next = () => {
        const node = this.stack.pop();
        this.leftMostTree(node.right);
        return node.val;
    }

    hasNext = () => {
        return !this.stack.isEmpty();
    }
}

const bTree = new Examples().getBinaryTree(12);
bTree.traverseLevelOrder();
console.log('--------');
// bstIteratorPreOrder(bTree.getRootNode());
const it = new BstIterator(bTree.getRootNode());
while(it.hasNext()) {
    console.log('Iterator', it.next());
}

console.log('--------');
bTree.traverseLevelOrder();