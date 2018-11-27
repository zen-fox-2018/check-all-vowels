function checkVowels(str) {
    var notvowels = "bcdfghjklmnpqrstvwxyz"

    for (var i = 0; i <= str.length - 1; i++) {
        var isAllVowels = true
        for (var j = 0; j <= notvowels.length - 1; j++) {
            if (notvowels[j] == str[i]) {
                return false
            }
        }
    }

    return isAllVowels
}
console.log(checkVowels("aiueo"))//true
console.log(checkVowels("hacktiv"))//false
console.log(checkVowels("celyn"))//false
console.log(checkVowels("aeo"))//true


