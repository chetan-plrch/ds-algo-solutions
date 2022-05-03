function nextGreater(arr) {
    let stack = [];
    for(let i = 0; i < arr.length; i++) {
        while(stack.length > 0 && (stack[stack.length - 1] < arr[i])) {
            console.log(stack[stack.length - 1], '->', arr[i])
            stack.pop();
        }

        stack.push(arr[i]);
    }

    stack.forEach(value => {
        console.log(value, '->', -1);
    })
}

let arr = [1, 3, 2, 4]
let arr1 = [4, 3, 2, 1]
console.log(nextGreater(arr1))
