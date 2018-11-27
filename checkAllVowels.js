function checkVowel(input) {
  let arrin = input.split('')
  return arrin.every(x => x == 'a' || x =='e' || x == 'i' || x =='o' || x == 'u' )
}

console.log(checkVowel('aaa')); //true
console.log(checkVowel('aba')); //false
console.log(checkVowel('aiioa')) //true