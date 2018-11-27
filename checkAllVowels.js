function allVowels(str){
    let kamus = 'aiueoAIUEO'
    result = ""
    for(i=0; i < str.length; i ++){
        cek = false
        for(j=0; j < kamus.length; j ++){       
            if(str[i] == kamus[j]){
                cek = true
            }      
        }

        if(!cek){
            result += str[i]
        }
    }
    if(result.length > 0){
        return false
    }
    else {
        return true
    }
  
}

console.log(allVowels('aiueo')) //true
console.log(allVowels('ieuoaaeeiIuuuuaa')) //true
console.log(allVowels('ieuoaaxeeiiuuuufaa')) //false