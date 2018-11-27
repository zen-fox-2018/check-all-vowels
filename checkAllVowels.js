function checkVowel (str) {
  var vowel = 'aeiou';

  for (var i = 0; i < str.length; i++) {
    var isVowel = false;
    for (var j = 0; j < vowel.length; j++) {
      if (str[i] === vowel[j]) {
        isVowel = true;
      }
    }
    if (!isVowel) {
      return false;
    }
  }
  return true;
}

console.log(checkVowel('mjgkrjfireee'));  //false
console.log(checkVowel('aaeiuoiea'));   //true
console.log(checkVowel('aeutoppaoieeo'));   //false
console.log(checkVowel('aeiotutruo'));   //false
console.log(checkVowel('eioiaoueua'));    //true