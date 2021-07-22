const sort = require('fast-sort');

const small = [1, 4, 2, 0, 5, 8, 9, 11, 6, 7]

const rangeBrute = () => {
    const sorted = sort(small).asc();
    let max = 0, count = 1;
    for(let i = 0; i < sorted.length; i++) {
        count = 1;
        while((sorted[i] === (sorted[i + 1] - 1)) && i < sorted.length) {
            i++;
            count++;
        }

        if(count > max) {
            max = count;
        }
    }

    return max;
}

const rangeObject = () => {
    let saved = {};
    let range = [];

    for(let i = 0; i < small.length; i++) {
        saved[small[i]] = true;
    }
    
    let i,j;
    for(let key in saved) {
        delete saved[key]
        i = parseInt(key) - 1;
        j = parseInt(key) + 1;
        console.log('out', key);

        while(saved[i] || saved[j]) {
            console.log('inside', key);
            if(saved[i] && saved[j]) {
                delete saved[i]
                delete saved[j]
                i--;j++;
            } else if(saved[i]) {
                delete saved[i]
                i--;
            } else if(saved[j]) {
                delete saved[j]
                j++;
            } else {
                break;
            }
        }

        range.push([i+1, j-1]);
    }
      
    let maxIndex = 0;
    for(let i = 1; i < range.length; i++) {
        let range1 = range[maxIndex][1] - range[maxIndex][0];
        let range2 = range[i][1] - range[i][0];
        if(range2 > range1) {
            maxIndex = i;
        }
    }

    return range[maxIndex];
}

console.log(rangeObject())