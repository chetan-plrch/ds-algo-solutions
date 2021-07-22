const arr = [
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11]
];

const traverseSpiral = () => {
    // By mutating the given array
    let right = true;
    let down, left, up;
    let iMax = arr.length;
    let jMax = arr[0].length;
    let total = iMax * jMax;
    let current = 1;
    let i = 0, j = 0;

    while(current <= total) {
        console.log(arr[i][j]); arr[i][j] = 0;
        if(right) j++;
        else if(down) i++;
        else if(left) j--;
        else if(up) i--;

        if(right && ((j === jMax - 1) || (arr[i][j+1] === 0))) {
            right = false; down = true;
        } else if(down && ((i === iMax - 1) || (arr[i+1][j] === 0 ))) {
            down = false; left = true;
        } else if(left && ((j === 0) || (arr[i][j-1] === 0))) {
            left = false; up = true;
        } else if(up && ((i === 0) || (arr[i-1][j] === 0))) {
            up = false; right = true;
        }

        current++;
    }
}

const traverseSpiralNonMutation = () => {
    // By not mutating the given array
    let right = true;
    let down, left, up;

    let iMin = 0;
    let jMin = 0;
    let iMax = arr.length;
    let jMax = arr[0].length;
    let total = iMax * jMax;

    let current = 1;
    let i = 0, j = 0;

    while(current <= total) {
        console.log(arr[i][j]);
        if(right) j++;
        else if(down) i++;
        else if(left) j--;
        else if(up) i--;

        if(right && (j === jMax - 1)) {
            right = false; down = true; iMin++;
        } else if(down && (i === iMax - 1)) {
            down = false; left = true; jMax--;
        } else if(left && (j === jMin)) {
            left = false; up = true; iMax--;
        } else if(up && (i === iMin)) {
            up = false; right = true; jMin++;
        }

        current++;
    }
}

const traversePerimeter = () => {
    let startRow = 0;
    let startCol = 0;
    let endRow = arr.length - 1;
    let endCol = arr[0].length - 1;
    let output = [];

    const isArrayFull = () => output.length === (endRow + 1) * (endCol + 1);

    while(startRow <= endRow && startCol <= endCol) {
        for(let i = startRow, j = startCol; j <= endCol; j++) {
            if(isArrayFull()) return output;
            output.push(arr[i][j])
        };

        for(let i = startRow + 1, j = endCol; i <= endRow; i++) {
            if(isArrayFull()) return output;
            output.push(arr[i][j])
        };

        for(let i = endRow, j = endCol - 1; j >= startCol; j--) {
            if(isArrayFull()) return output;
            output.push(arr[i][j])
        };

        for(let i = endRow - 1, j = startCol; i >= startRow; i--) {
            if(isArrayFull()) return output;
            output.push(arr[i][j])
        };

        startRow++;
        startCol++;
        endRow--;
        endCol--;
    }
    return output;
}

console.log(traversePerimeter());

