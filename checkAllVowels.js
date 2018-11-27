function checkAllVowel(str) {
    const vow = `aiueo`

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vow.length; j++) {
            if (str[i].toLowerCase() === vow[j].toLowerCase()) {
                return true
            }   
        }
    }
    return false
}

console.log(checkAllVowel(`ghsgdfhsgdfhsh`));
console.log(checkAllVowel(`taqiabdulaziz`));
console.log(checkAllVowel(`hacktiv8`));

