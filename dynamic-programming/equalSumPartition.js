const d = {
    items: [2, 6, 6, 12, 2]
}

/**
 * What is the abstract idea behind this ?
 * Array must be partitioned into two equal sums
 * 
 * How would you do it on notes
 * 
 */

 const isSubsetSumPresent = (items, sum, index) => {
    if(sum === 0) return true;
    if(index === items.length) return false;

    if(items[index] <= sum) {
        return ((isSubsetSumPresent(items, sum - items[index], index + 1)) || (isSubsetSumPresent(items, sum, index + 1)));
    } else {
        return isSubsetSumPresent(items, sum, index + 1);
    }
}

const equalSum = (items) => {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        sum = sum + items[i];
    }
    
    if((sum % 2) === 1) return false;

    const subSum = sum / 2;
    return isSubsetSumPresent(items, subSum, 0);
}

console.log(equalSum(d.items));