const data = {
    arr: [2, 3, 7, 8, 10],
    sum: 14
};

/**
 * Top-down approach
 */
const subsetExist = (arr, sum, pathSum, index) => {
    if(index >= arr.length)
        return false;

    const lPathSum = pathSum + arr[index];
    const rPathSum = pathSum;
    
    const lMatch = subsetExist(arr, sum, lPathSum, index + 1);
    const rMatch = subsetExist(arr, sum, rPathSum, index + 1);

    return (lPathSum === sum) || (rPathSum === sum) || lMatch || rMatch;
}

/**
 * Bottom-up approach
 */
 const subsetExist2 = (arr, sum, index) => {
    if(index >= arr.length)
        return false;
    
    // subsetExist2(arr, sum, index + 1);
    // subsetExist2(arr, sum, index + 1);

    return arr[index];
}

console.log('Subset exists: ', subsetExist(data.arr, data.sum, 0, 0));