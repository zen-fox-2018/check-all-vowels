function checkAllVowels(sentence) {
  var vowels = ['a','i','u','e','o'];
  var checker = false;
  for (var i = 0; i < sentence.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (sentence[i] === vowels[j]){
        checker = true;
      }
      // console.log(sentence[i],vowels[j],checker);
    }
    if (checker === false) {
      return false;
    }
    checker = false;
  }
  return true;
}

console.log(checkAllVowels('aaaaiiiuuueeeoao'));
console.log(checkAllVowels('air'));
console.log(checkAllVowels('oooaeiaooaioee'));
