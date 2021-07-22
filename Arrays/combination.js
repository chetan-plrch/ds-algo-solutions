const s = 'ABC';
const l = {};

function swapChar(s, i, j) {
    const a = s.split('');
    let t = a[i];
    a[i] = a[j];
    a[j] = t;
    return a.join('');
}

function findCombinations(f, s) {
    if(!s || s.length === 1) return;
    for(let i = 0; i < s.length; i++) {
        let c = f + swapChar(s, 0, i);
        l[c] = true;
        findCombinations(c.substring(0, f.length + 1), c.substring(f.length + 1, c.length));
    }
}

findCombinations('', s);

console.log(Object.keys(l));