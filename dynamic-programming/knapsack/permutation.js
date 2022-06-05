let count = 0;
const a = 'ABCDEFGH';

const swapLetters = (s, i, j) => {
    if(i === j) return s;
    else {
        const split = s.split('');
        const t = split[i];
        split[i] = split[j];
        split[j] = t;
        return split.join('');
    }
}

const findPermutations = (f, s, o) => {
    if(!s || s.length === 1) return;
    for(let i = 0; i < s.length; i++) {
        const level = f.length + 1 + '';
        const nC = f + swapLetters(s, 0, i);
        count++;
        const isNew = !o[nC];
        const r = !isNew && o[nC].includes(level);

        if(isNew) {
            o[nC] = level;
        } else {
            o[nC] = o[nC] + ',' + level;
        }

        if(!r) {
            findPermutations(nC.substring(0, f.length + 1), nC.substring(f.length + 1, nC.length), o);
        }
    }
    return o;
}

const v = findPermutations('', a, {});

console.log(Object.keys(v), Object.keys(v).length);
console.log('Loop', count, v);