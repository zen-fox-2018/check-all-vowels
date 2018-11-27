function checkAllVowels(input) {

    const vowelWords = ['a', 'i', 'u', 'e', 'o'];
    let countVowel = 0;

    for (let i = 0; i < vowelWords.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[j].toLowerCase() === vowelWords[i]) {
                countVowel++
            }
        }
    }


    return countVowel === vowelWords.length ? true : false

}

console.log(checkAllVowels('uang'));
console.log(checkAllVowels('aIueO'));