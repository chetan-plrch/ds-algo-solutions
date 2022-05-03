
function sortArrayUsingRecursion(arr) {
    if(!arr || arr.length === 0) {
        return;
    }
    
    let top = arr.pop();
    sortArrayUsingRecursion(arr);
    sort(top, arr);

    return arr;
}

function sort(element, arr) {
    if(arr.length === 0) {
        arr.push(element);
    } else if(arr[arr.length - 1] > element) {
        let top = arr.pop();
        sort(element, arr);
        sort(top, arr);
    } else if(arr[arr.length - 1] < element) {
        arr.push(element);
    }
}



let arr = [9, 7, 8, 5, 0, 4, 3, 1, 2, 6];

console.log(sortArrayUsingRecursion(arr))