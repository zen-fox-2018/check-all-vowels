function checkAllVowels(str) {
  var vowels = 'aiueo'

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        return false  
      }
    }
  }
  return true
}

console.log(checkAllVowels('approximately'))
console.log(checkAllVowels('rhythm'))
