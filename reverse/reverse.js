let arraySentence = [];
let reversedPhrase = "";

let sentenceReverse = function (sentence) {
    for (let letter of sentence) {
        arraySentence.push(letter);
    }
arraySentence.reverse()
for (arrayLetter of arraySentence) {
 reversedPhrase += arrayLetter;
}
return reversedPhrase;
}
console.log(sentenceReverse("Joyce Joyce"));