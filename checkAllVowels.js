function checkVowel(str) {
  var vocal = 'aiueo';
  for(var i = 0; i < str.length; i++){
    var isCheck = false;
    for(var j = 0; j < vocal.length; j++){
      if(str[i].toLowerCase() === vocal[j]){
        isCheck = true;
      }
    }
    if(!isCheck){
      return false;
    }
  }
  return true;
}

console.log(checkVowel('aiueeeiiiooo'));
console.log(checkVowel('abaaaaaaaaaa'));
console.log(checkVowel('aiiiii'));
