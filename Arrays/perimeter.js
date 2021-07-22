const array = [
    [1, 2, 3],
    [6, 5, 4],
]

const traversePerimeter = (array) => {
    let totalElements = array.length * array[0].length;
    let rs = 0;
    let cs = 0;
    let re = array.length - 1;
    let ce = array[0].length - 1;
    let values = [];

    while(cs <= ce && rs <= re) {
        for(let i = rs, j = cs; j <= ce; j++) {
            values.push(array[i][j]);
            if(values.length === totalElements) return values;
        }

        for(let i = rs + 1, j = ce; i <= re; i++) {
            values.push(array[i][j]);
            if(values.length === totalElements) return values;
        }

        for(let i = re, j = ce-1; j >= cs; j--) {
            values.push(array[i][j]);
            if(values.length === totalElements) return values;
        }

        for(let i = re-1, j = cs; i >= rs+1; i--) {
            values.push(array[i][j]);
            if(values.length === totalElements) return values;
        }

        rs++;
        cs++;
        re--;
        ce--;
    }

    return values;
}

console.log(traversePerimeter(array))