const arr1 = [3, 1, 6, 5, 2, 4]
const arr = [10, 12, 19, 26, 27, 31, 33, 35, 42, 44]

function calculateSize(arr) {
  return Math.ceil(Math.log2(arr.length))
}

function getLeftChildIndex(parentIndex) {
  return (parentIndex + 1) * 2 - 1
}

function getRightChildIndex(parentIndex) {
  return (parentIndex + 1) * 2
}

function swap(gArr, i, j) {
  const temp = gArr[i]
  gArr[i] = gArr[j]
  gArr[j] = temp
}

function createFullArray(arr) {
  const power = calculateSize(arr)
  const newArray = new Array(Math.pow(2, power) - 1).fill(
    Number.MIN_SAFE_INTEGER,
  )
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = arr[i]
  }
  return createADummyArray(newArray, power, 0, 0)
}

let called = 0
function createADummyArray(newArray, power, ith, jth) {
  let offset = 0
  for (let i = ith; i < power - 1; i++) {
    for (let j = jth; j < Math.pow(2, i); j++, offset++) {
      called++
      if (newArray[offset] < newArray[getLeftChildIndex(offset)]) {
        swap(newArray, offset, getLeftChildIndex(offset))
        createADummyArray(newArray, power, i, j++)
      } else if (newArray[offset] < newArray[getRightChildIndex(offset)]) {
        swap(newArray, offset, getRightChildIndex(offset))
        createADummyArray(newArray, power, i, j++)
      }
    }
  }
  return newArray
}

console.log(
  JSON.stringify(createFullArray(arr).slice(0, arr.length), null, 5),
  called,
)
