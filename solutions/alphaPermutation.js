let str = '1a22b3c'

function isAlpha(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
}

function getPermutation() {
    let stringArr = str.split('');
    let numberOfChar = 0;
    let result = [];

    for(let i = 0; i < stringArr.length; i++) {
        if(isAlpha(stringArr[i])) {
            numberOfChar++;
        }
    }

    let totalPermutations = Math.pow(2, numberOfChar)

    for(let i = 0; i < totalPermutations; i++) {
        for(let j = 0; j < str.length; j++) {
            if(isAlpha(str.charAt(j))) {
                atChar++;
            }
        }
    }
}

console.log(getPermutation())