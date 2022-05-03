let count = 0;
const a = 'ABCD';

const swap = (s, i, j) => {
    if(i === j) return s;
    else {
        const split = s.split('');
        const t = split[i];
        split[i] = split[j];
        split[j] = t;
        return split.join('');
    }
}

const permute = (str, l, r) => {
    if(l === r) {
        console.log(str);
    } else {
        for (let i = l; i <= r; i++) {
            str = swap(str,l,i); 
            permute(str, l+1, r);
        } 
    }
}

permute(a, 0, a.length - 1);
