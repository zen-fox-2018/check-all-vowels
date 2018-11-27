function cekVowel(input) {
    var vowel = 'aiueo'
    var count = 0
    for (let i = 0; i < input.length; i++) {
        var flag = false
        for (let j = 0; j < vowel.length; j++) {
            if (input[i] === vowel[j]) {
                flag = true
            }
            
        }
        if (flag) {
            count+=1
        }
        
    }
    if (count == input.length){
        return true
    } else {
        return false
    }
}


console.log(cekVowel('aaaaa')); //true
console.log(cekVowel('aakaa')); //false
console.log(cekVowel('aiueoeoeo')); //true
console.log(cekVowel('kakikukeko')); // false
console.log(cekVowel('uiuiouioiuoiu')); //true