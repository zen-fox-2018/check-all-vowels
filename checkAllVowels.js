function checkVowel(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let arrWord = Array.from(word)
    let temp = ''

    arrWord.forEach((valueWord) => {
        vowels.forEach((valueVowel) => {
            if(valueWord === valueVowel) {
                temp += valueWord
            }
        })
    })

    if(temp === word) {
        return true
    }
    return false
}

console.log(checkVowel('programmer'))
console.log(checkVowel('aeae'))