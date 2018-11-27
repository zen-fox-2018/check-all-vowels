

function CheckVowels(str){
    var vowel = "aiueo"
    isVowel = true

    for(var i=0; i<str.length; i++){
        if(vowel.indexOf(str[i]) === -1){
            return false
        }
    }

    return isVowel

}

console.log(CheckVowels('aiueo'))
console.log(CheckVowels('aiueox'))