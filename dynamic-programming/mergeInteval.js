const arr = [[1,3],[3,5],[6,9],[5,8]];

const sortIntervals = (a) => {
    return a.sort((it, it2) => {
        const [a, b] = it;
        const [a2, b2] = it2;
        return ((a - a2) === 0) ? (a - a2) : (b - b2);
    })
}

const mergeIntervals = (a) => {
    const sortedList = sortIntervals(a);
    const result = [];
    
    let first = null;
    let second = null;

    for(let i = 0; i < a.length - 1; i++) {
        const j = i + 1;
        const [a, b] = sortedList[i];
        const [a2, b2] = sortedList[j];

        if(first === null) {
            first = a;
        } 
        
        if(b <= a2) {
            second = b2;
            continue;
        } else if(b > a2) {
            second = a;
        }
    }

    return result;
}

console.log(mergeIntervals(arr));