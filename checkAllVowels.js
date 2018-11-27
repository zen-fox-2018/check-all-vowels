
function checkAllVowels(str) {
    let strLowerCase = str.toLowerCase();
    let vowels = "aiueo";
    for(let i of strLowerCase) {
        if(vowels.includes(i)) {
            return true;
        }
    }
    return false;
}
console.log(checkAllVowels("Saturn")); //true
console.log(checkAllVowels("Mars")); //true
console.log(checkAllVowels("gggg")); //false
console.log(checkAllVowels("Sister")); //true
console.log(checkAllVowels("Hymn")); //false