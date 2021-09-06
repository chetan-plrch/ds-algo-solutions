const data = {
    s: 'abcde',
};

/**
 * Top-down approach
 */
const subsequence = (s, index, sub, setV) => {
    if(index >= s.length)
        return '';

    const lSub = sub + s[index];
    const rSub = sub;

    setV.add(rSub);
    setV.add(lSub);

    subsequence(s, index + 1, lSub, setV);
    subsequence(s, index + 1, rSub, setV);
}

const s = new Set();
subsequence(data.s, 0, '', s)
console.log('All subsequence: ');
s.forEach((v) => console.log(v))