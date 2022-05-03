let { Node } = require('./utils/ListNode');

class BinarySearchTree {
    constructor(value = null) {
        this.root = new Node(value);
    }

    addElement(value) {
        let newNode = new Node(value);
        this.add(this.root, newNode)
    }

    add(root, node) {
        if(root)  {
            if(root.val > node.val) {
                if(root.left) {
                    return this.add(root.left, node);
                } else {
                    root.left = node;
                    return node;
                }
            } else if(root.val < node.val) {
                if(root.right) {
                    return this.add(root.right, node);
                } else {
                    root.right = node;
                    return node;
                }
            }
        } else {
            console.log('Root node is empty');
        }
    }

    search(root, value) {
        if(root) {
            if(root.val === value) {
                return root;
            } else if(root.val > value) {
                return this.search(root.left, value);
            } else if(root.val < value) {
                return this.search(root.right, value);
            } else {
                console.log('Unhandled case');
                return false;
            }
        }
        return false;
    }

    getRoot() {
        return this.root;
    }

    displayFull() {
        console.log(JSON.stringify(this.root));
    }
}

module.exports = BinarySearchTree