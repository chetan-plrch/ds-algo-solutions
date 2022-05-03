function findTheClosestSum(arr) {
    let i = 0;
    let j = arr.length - 1;
    let a1;
    let a2;
    let smallest = Infinity;

    while(i < j) {
        let value = arr[i] + arr[j];
        
        if(Math.abs(value) < smallest) {
            a1 = arr[i];
            a2 = arr[j];
            smallest = Math.abs(value);
        }

        if(value === 0) {
            break;
        } if(value > 0) {
            j--;
        } else {
            i++;
        }
    }

    return [a1, a2, smallest]
}

console.log(findTheClosestSum([-80, -10, 1, 60, 70, 85, 89]))