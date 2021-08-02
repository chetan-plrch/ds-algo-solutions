const Examples = require("../../utility/examples");

const isSymmentric = (root, root2) => {
    if (root && root2) {
        if (root.val !== root2.val) {
            return false;
        }

        const lCheck = isSymmentric(root.left, root2.right);
        const rCheck = isSymmentric(root.right, root2.left);

        return lCheck && rCheck;
    } else if (!!root ^ !!root2) {
        return false;
    }
    return true;
}

const bTree = new Examples().getBinaryTree(11);
const bTreeRoot = bTree.getRootNode();

console.log('Given tree is symmentric:', isSymmentric(bTreeRoot, bTreeRoot));