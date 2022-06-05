// Assuming the values are unique

const arr = [1, 2, 3, 4];

function getComb(arr) {
    const c = [];
    for(let i = 0; i < arr.length; i++) {
        c.push([arr[i]]);
        for(let j = i + 1; j < arr.length; j++) {
            c.push([c[c.length - 1], arr[j]]);
            for(let j = i + 1; j < arr.length; j++) {

            }
        }
    }
    return c;
}

console.log(getComb(arr));