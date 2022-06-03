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
let count = 0;
const countSubsetSum = (items, sum, index) => {
    if(index === items.length) return false;
    if(sum === 0) count++;

    if(items[index] <= sum) {
        return ((countSubsetSum(items, sum - items[index], index + 1)) || (countSubsetSum(items, sum, index + 1)));
    } else {
        return countSubsetSum(items, sum, index + 1);
    }
}

countSubsetSum(d.items, 12, 0);
console.log(count);