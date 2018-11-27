// function checkVowel(word) {
//     const vowels = ['a', 'i', 'u', 'e', 'o']
//     for (let i = 0; i < word.length; i++) {
//         let check = false
//         vowels.forEach(e => {
//             if (word[i] === e) {
//                 check = true
//             }
//         });
//         if (check === false) {
//             return false
//         }
//     }
//     return true
// }

function checkVowel(word) {
    word = word.split('')
    return word.every(data => {
        let kamus = ['a', 'i', 'u', 'e', 'o']
        return kamus.includes(data)
    })
}

console.log(checkVowel('aiu'));
console.log(checkVowel('aiueo'));
console.log(checkVowel('aikau'));
