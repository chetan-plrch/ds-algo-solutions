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

const diagonalNodes2 = (diagonal, root, hLevel, vLevel) => {
    if(root) {
        
        if(diagonal[hLevel - vLevel]) {
            if(diagonal[hLevel - vLevel].has(root.val)) {
                diagonal[hLevel - vLevel].set(root.val, diagonal[hLevel - vLevel].get(root.val) + 1);
            } else {
                diagonal[hLevel - vLevel].set(root.val, 1);
            }
        } else {
            diagonal[hLevel - vLevel] = new Map();
            diagonal[hLevel - vLevel].set(root.val, 1);
        }

        diagonalNodes2(diagonal, root.left, hLevel + 1, vLevel - 1);
        diagonalNodes2(diagonal, root.right, hLevel + 1, vLevel + 1);
    }

    return diagonal;
}

const getDiagonalNodes = (root) => {
    return diagonalNodes({}, root, 1, 0);
};

const getDiagonalNodes2 = (root) => {
    return diagonalNodes2({}, root, 1, 0);
};

module.exports = {
    getDiagonalNodes,
    getDiagonalNodes2
}