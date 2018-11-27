
function checkVowels(word) {
   let kata = word.split('') 
   return kata.every(alp => alp === "o" || alp === "i" || alp === "a" || alp === "u" || alp === "e") 
}

console.log(checkVowels("eejuii"))
console.log(checkVowels("aiueo"))
console.log(checkVowels("jjjjui"))
console.log(checkVowels("iiiiii"))