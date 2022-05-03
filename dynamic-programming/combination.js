const a = 'ABCD';
const o = {};

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

const findCombinations = (f, s) => {
    if(!s || s.length === 1) return;
    for(let i = 0; i < s.length; i++) {
        const nC = f + swapLetters(s, f.length, i);
        o[nC] = true;
        findCombinations(nC.substring(0, f.length + 1), nC.substring(f.length + 1, s.length));
    }
}

findCombinations('', a);

console.log(Object.keys(o));