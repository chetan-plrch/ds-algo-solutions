let letters = ["a", "b", "c", "d"];
let combi = [];
let temp= "";
let letLen = Math.pow(2, letters.length);

for (let i = 0; i < letLen ; i++){
    temp= "";
    for (let j=0;j<letters.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += letters[j]
        }
    }
    if (temp !== "") {
        combi.push(temp);
    }
}

console.log(combi.sort((a, b) => a.length - b.length).join("\n"));