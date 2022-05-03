function isValid(char) {
    if(Number.isInteger(parseInt(char))){
        return true;
    } else if(char === '-') {
        return true;
    } else if(char === ' ') {
        return true;
    }

    return false;
}

function convert(str) {
    if(!str) {
        return 0;
    }

    let char = str.charAt(0);

    if(!isValid(char)) {
        return 0;
    } else {
        str = str.substring(1, str.length)
        if(char === ' ') {
            return convert(str)
        } else if(char === '-') {
            char = char + str.charAt(0);
            str = str.substring(1, str.length);
            
            let num = parseInt(char);
            return num + (convert(str) * 10);
        } else {
            let char2 = str.charAt(0)
            if(Number.isInteger(parseInt(char2))) {
                return parseInt(char) + (convert(str) * 10);
            } else {
                return parseInt(char);
            }
        }
    }
}

console.log(convert("112"))
console.log(convert("012345"))
console.log(convert("543210"))
