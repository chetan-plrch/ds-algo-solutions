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
    if(str === '') {
        return 0;
    } else {
        let char = str.charAt(0);
        str = str.substring(1, str.length)
        return (isConsonant(char) ? 1 : 0) + countConsonants(str)
    }
}

console.log(countConsonants("abc de"))
console.log(countConsonants("geeks for geeks portal"))