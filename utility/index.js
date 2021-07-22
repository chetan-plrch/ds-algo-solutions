const chalk = require("chalk");

const swapInteger = (arr, i, j) => {
    if(arr[i] === arr[j] || i === j) {
        return;
    }
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
}

const swapChar = (arr, i, j) => {
    if(arr[i] === arr[j] || i === j) {
        return;
    }
    arr[i] = String.fromCharCode(arr[i].charCodeAt(0) ^ arr[j].charCodeAt(0));
    arr[j] = String.fromCharCode(arr[i].charCodeAt(0) ^ arr[j].charCodeAt(0));
    arr[i] = String.fromCharCode(arr[i].charCodeAt(0) ^ arr[j].charCodeAt(0));
}

const swapString = (arr, i, j) => {
    if(i === j) {
        return;
    }
    arr[i] = arr[i].concat(arr[j]);
    arr[j] = arr[i].slice(0, arr[i].length - arr[j].length);
    arr[i] = arr[i].slice(arr[j].length, arr[i].length);
}

const swap = (arr, i, j) => {
    if(typeof arr[i] === 'string') {
        if(arr[i].length === 1 && arr[j].length === 1) {
            swapChar(arr, i, j);
        } else {
            swapString(arr, i, j);
        }
    } else {
        swapInteger(arr, i, j);
    }
}

module.exports = {
    swap,
    swapInteger,
    swapChar,
    swapString
}