const scores = [1, 2, 3, 4, 5, 6, 7]
const scores1 = [7, 6, 5, 4, 3, 2, 1]
const scores2 = [3, 2, 1, 2, 3, 4]
const scores3 = [1, 2, 3, 4, 3, 2, 1]
const scores4 = [1, 2, 4, 3, 6, 5]
const scores5 = [0, 4, 2, 1, 3]; // Result: 1, 3, 2, 1, 2
const scores6 = [8, 4, 2, 1, 3, 6, 7, 9, 5]

const calculateMinReward = (s) => {
    let r = new Array(s.length);    
    let prev = -1;

    if(s.length === 1) return 1;

    for(let i = 0; i < s.length; i++) {
        if(checkSlope(i, s)) r[i] = 1;
    }

    for(let i = 1; i < s.length; i++) {
        if(i === s.length - 1) {
            if(r[i-1] === 1) {
                r[i] = 2;
            } else if(r[i-1]) {
                r[i] = r[i-1] + 1;
            }
        } else if(r[i-1] === 1 || r[i-1]) {
            if(s[i] < s[i+1] && r[i] !== 1) {
                r[i] = r[i-1] + 1;
                r[i+1] = r[i] + 1;
            }
        }  
    }

    for(let i = s.length - 2; i >= 0; i--) {
        if(i === 0) {
            if(r[i+1] === 1) {
                r[i] = 2;
            } else if(r[i] > r[i+1]) {
                r[i] = r[i+1] + 1;
            }
        } else if(r[i+1] === 1 || r[i+1]) {
            if(s[i] < s[i-1] && r[i] !== 1) {
                r[i] = r[i+1] + 1;
                r[i-1] = r[i] + 1;
            }
        }  
    }

    for(let i = 0; i < s.length; i++) {
        if(!r[i]) r[i] = 2;
    }

    return r;
}

const checkSlope = (i, s) => {
    if(i === 0) {
        return s[0] < s[1];
    } else if(i === s.length - 1) {
        return s[s.length - 1] < s[s.length - 2];
    } else {
        return (s[i] < s[i+1]) && (s[i] < s[i-1]);
    }
}

console.log(calculateMinReward(scores))
console.log(calculateMinReward(scores1))
console.log(calculateMinReward(scores2))
console.log(calculateMinReward(scores3))
console.log(calculateMinReward(scores4))
console.log(calculateMinReward(scores5))
console.log(calculateMinReward(scores6))