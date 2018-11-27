function checkVowel(str) {
  str = str.toLowerCase().split('');
  return str.every(data => {
    var kamus = ['a', 'i', 'u', 'e', 'o'];
    return kamus.includes(data);
  })
}

console.log(checkVowel('Aiueeeiiiooo'));
console.log(checkVowel('abaaaaaaaaaa'));
console.log(checkVowel('aiiiii'));
