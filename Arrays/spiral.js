const arr = [
    [19, 32, 33, 34, 25, 8],
    [16, 15, 14, 13, 12, 11],
    [18, 31, 36, 35, 26, 9],
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [17, 30, 29, 28, 27, 10]
];

// 0 0
// 0 1
// 0 2

// 1 2
// 2 2

// 2 1
// 2 0

// 1 0

// 1 1

function traverseSpiral() {
    let i = 0;
    let j = 0;
    let flip = true;
    let positive = true;
    let count = 0;

    let refJMax = arr[0].length - 1;
    let refIMax = arr.length - 1;
    let jMax = refJMax;
    let iMax = refIMax;

    let output = [];

    while(count < (arr[0].length * arr.length)) {
        output.push(arr[i][j]);
        if(flip) {
            if(positive) {
                j++;

                if(j >= jMax) {
                    flip = false;
                    jMax--;
                }
            } else {
                j--;

                if(j <= 0) {
                    flip = false;
                }
            }
        } else {
            if(positive) {
                i++;

                if(i >= iMax) {
                    flip = true;
                    positive = !positive;
                }
            } else {
                i--;

                if(i <= 0) {
                    flip = true;
                    positive = !positive;
                    refIMax--;
                    refJMax--;
                    iMax = refIMax;
                    jMax = refJMax;
                    i++;
                    j++;
                }
            }
        }

        count++;
    }

    return output;
}

console.log(traverseSpiral());
