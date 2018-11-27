function checkAllVowels(str) {
  let check = false
  let vowels = "aiueo"

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) != -1) {
      check = true
    }
    else {
      return false
    }
  }
  return check
}

console.log(checkAllVowels("aiuoua")); // true
console.log(checkAllVowels("patria")); // false
console.log(checkAllVowels("taqi")); // false
console.log(checkAllVowels("iuuaa")); // true