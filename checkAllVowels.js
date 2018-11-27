// function checkVowel(string){
//   let cek = false
//   string = string.toLowerCase()
//
//   for (let i = 0 ; i < string.length ; i++){
//     if (string[i] === 'a' || string[i] == 'i' || string[i] == 'u' || string[i] == 'e'  || string[i] == 'o'){
//       cek = true
//     } else {
//       return false
//     }
//   }
//
//   return cek
// }

function checkVowel(string){
  let cek = true
  string = string.toLowerCase()
  let vowel = 'aiueo'
  for (let i = 0 ; i < string.length ; i++){
    if (vowel.indexOf(string[i]) === -1){
      return false
    }
  }
  return cek
}

console.log(checkVowel('aieuo'))
console.log(checkVowel('abcde'))
console.log(checkVowel('aaaaa'))
console.log(checkVowel('zzzzz'))
