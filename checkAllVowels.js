function checkAllVocal(string) {
    var vocal = 'aiueo'

    if (string.length === 0) {
        return true
    }
    else {
        var isVocal = false
        for (var i = 0; i < vocal.length; i++) {
            if (string[0] === vocal[i]) {
                isVocal = true
            }
        }
        if (isVocal === false) {
            return false
        }
        else {
            return checkAllVocal(string.slice(1))
        }    
    }
}

console.log(checkAllVocal('aiuooeo'))
console.log(checkAllVocal('oreo'))
console.log(checkAllVocal('auoooo'))