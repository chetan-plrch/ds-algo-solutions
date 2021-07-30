const diagonalNodes = (diagonal, root, hLevel, vLevel) => {
    if(root) {
        diagonal[hLevel] = { ...(diagonal[hLevel] || {}) };

        if(diagonal[hLevel][vLevel]) {
            diagonal[hLevel][vLevel].add(root.val);
        } else {
            diagonal[hLevel][vLevel] = new Set();
            diagonal[hLevel][vLevel].add(root.val);
        }

        diagonalNodes(diagonal, root.left, hLevel + 1, vLevel - 1);
        diagonalNodes(diagonal, root.right, hLevel + 1, vLevel + 1);
    }

    return diagonal;
}

const getDiagonalNodes = (root) => {
    return diagonalNodes({}, root, 1, 0);
};

module.exports = {
    getDiagonalNodes,
}