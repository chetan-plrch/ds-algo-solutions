class Node {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    root = null;

    constructor(rootData = 'root') {
        this.root = new Node(rootData);
    }

    appendChildLeft(insertAtData, dataToInsert) {
        let matchedNode = this.preOrderMatch(this.root, insertAtData);
        if(matchedNode && !matchedNode.left) {
            let n1 = new Node(dataToInsert);
            matchedNode.left = n1;
        } else {
            console.log('Node has already left node');
        }
    }

    appendChildRight(insertAtData, dataToInsert) {
        let matchedNode = this.preOrderMatch(this.root, insertAtData);
        if(matchedNode && !matchedNode.right) {
            let n1 = new Node(dataToInsert);
            matchedNode.right = n1;
        } else {
            console.log('Node has already right node');
        }
    }

    preOrderTraverse(root) {
        if(root) {
            console.log(root.data);
            this.preOrderTraverse(root.left);
            this.preOrderTraverse(root.right);
        }
    }

    postOrderTraverse(root) {
        if(root) {
            this.postOrderTraverse(root.left);
            this.postOrderTraverse(root.right);
            console.log(root.data);
        }
    }

    inOrderTraverse(root) {
        if(root) {
            this.inOrderTraverse(root.left);
            console.log(root.data);
            this.inOrderTraverse(root.right);
        }
    }

    levelOrderTraverse(root) {
        if(root) {
            if(root.left) {
                console.log(root.left.data);
            }

            if(root.right) {
                console.log(root.right.data);
            }

            this.levelOrderTraverse(root.left)
            this.levelOrderTraverse(root.right);
        }
    }

    preOrderMatch(root, data) {
        if(root) {
            if(root.data === data) {
                return root;
            } else {
                let leftNode = this.preOrderMatch(root.left, data);
                let rightNode = this.preOrderMatch(root.right, data);

                if(leftNode) {
                    return leftNode;
                } else {
                    return rightNode;
                }
            }
        } else {
            return null;
        }
    }
}

let t1 = new Tree('A');

console.log('1', t1);
t1.appendChildLeft('A', 'B');
t1.appendChildRight('A', 'C');

t1.appendChildLeft('B', 'D');
t1.appendChildLeft('D', 'G');
t1.appendChildRight('D', 'H');

t1.appendChildLeft('C', 'E');
t1.appendChildRight('C', 'F');

t1.appendChildRight('E', 'I');

console.log('---');
t1.preOrderTraverse(t1.root);
console.log('---');

t1.postOrderTraverse(t1.root);
console.log('---');

t1.inOrderTraverse(t1.root);
console.log('---');

console.log(t1.root.data);
t1.levelOrderTraverse(t1.root);
console.log('----');

