const q1 = [[10,20,10,40,50,60,70], 50]
const q2 = [[1, 5, 7, 1], 6];
const q3 = [[1, 1, 1, 1], 2];

const findPair = (nums, value) => {
    const obj = {};
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(obj[value - nums[i]] !== undefined) {
            count = count + obj[value - nums[i]].length;
        }

        if(obj[nums[i]] !== undefined) {
            obj[nums[i]].push(i);
        } else {
            obj[nums[i]] = [i];
        }
    }

    return count;
}

console.log('Pair', findPair(q1[0], q1[1])); // 2
console.log('Pair', findPair(q2[0], q2[1])); // 2
console.log('Pair', findPair(q3[0], q3[1])); // 6