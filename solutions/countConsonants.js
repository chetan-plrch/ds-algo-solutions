function isConsonant(char) {
    if(char === 'a' || char === 'A') {
        return false;
    } else if(char === 'e' || char === 'E') {
        return false;
    } else if(char === 'i' || char === 'I') {
        return false;        
    } else if(char === 'o' || char === 'O') {
        return false;        
    } else if(char === 'u' || char === 'U') {
        return false;        
    }

    let ascii = char.charCodeAt();

    if((ascii >= 97 && ascii <= 122) || (ascii >= 65 && ascii <= 90)) {
        return true;
    } else {
        return false;
    }

}

function countConsonants(str) {
    let i = 0;
    let j = str.length - 1;
    let count = 0;
    while(i <= j) {
        let char = str.charAt(i);
        let char2 = str.charAt(j);

        if((i === j) && isConsonant(char)) {
            count++;
        } else {
            if(isConsonant(char)){
                count++;
            }

            if(isConsonant(char2)) {
                count++;
            }
        }
        i++;
        j--;
    }

    return count;
}

console.log(countConsonants('abc de'))
console.log(countConsonants('geeksforgeeks portal'))
