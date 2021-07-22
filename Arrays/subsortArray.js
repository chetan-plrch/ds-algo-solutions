const arr = [1, 2, 3, 6, 5, 4, 7, 8, 9, 12, 11, 10]; // Result: [3, 11]

const findSubsortArray = (a) => {
    let min = Infinity;
    let max = -Infinity;
    let startIndex = -1;
    let endIndex = -1;
    let s = false;

    for(let i = 0, j = i + 1; i < a.length - 1; i++, j++) {
        if(a[i] > a[j]) {
            min = min < a[j] ? min : a[j];
            max = max > a[i] ? max : a[i];
            endIndex = j;
            s = true;
        } else if(s && a[j] < max) {
            min = min > a[j] ? a[j] : min;
            endIndex = j;
        }
    }

    if(min === Infinity || max === -Infinity) {
        return [-1, -1];
    }

    for(let i = 0; i < a.length; i++) {
        if(a[i] > min) {
            startIndex = i;
            break;
        }
    }

    return [startIndex, endIndex];
}

console.log(findSubsortArray(arr));