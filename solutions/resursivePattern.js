// ### solution 1
// let swap = false;
// let givenNum = 16;

// function recursivePattern(num) {
    // console.log(num, ' ');
    // if(num < 0) {
    //     swap = true;
    // }

    // if(swap && num === givenNum) {
    //     return;
    // }

    // if(!swap) {
    //     return recursivePattern(num - 5);
    // } else {
    //     return recursivePattern(num + 5)
    // }
// }

// ## solution 2

function recursivePattern(num) {
    console.log(num, ' ')
    
    if(num > 0) {
        recursivePattern(num - 5);
        console.log(num, ' ')
    } else {
        return;
    }
}

recursivePattern(16)