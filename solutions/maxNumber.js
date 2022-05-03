function swap(arr, i , j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function getMax(arr) {
    let i = 1;
    let j = 0;
    let nextMax = Infinity;
    let diff = Infinity;
    while(i < arr.length - 1) {
      if(arr[i] > arr[i - 1]) {
        i++;
      } else {
        j = i;
        while(j > 0) {
          let min = arr[j - 1] > arr[i] ? arr[j - 1] : (diff === Infinity ? arr[i] : diff);
          if((min > 0) && (min < diff)) {
            diff = min;
            nextMax = j - 1;
          }
          j--;
        }
        break;
      }
    }

    swap(arr, i, nextMax)

    j = 0
    while(i > j) {
      swap(arr, --i, j++)
    }

    return arr;
}

function makeMinMax(str) {
    return getMax(str.split('').reverse()).reverse().join('');
}

console.log(makeMinMax("1234"))


