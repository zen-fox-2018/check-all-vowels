
function checkvowel(str){
    var kamus = ['a','i','u','e','o']
    var vowel = ''
    for(i=0; i<str.length; i++){
        for(j=0; j<kamus.length; j++){
            if(str[i].toLowerCase() === kamus[j]){
                vowel+= kamus[j]
            }
        }
    }
    if(vowel.length === str.length){
        return true
    }else{
        return false
    }
}

console.log(checkvowel('apaya'))
console.log(checkvowel('aiou'))

