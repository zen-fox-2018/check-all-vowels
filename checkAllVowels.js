function checkVocal(string){
    var vokal='aiueoAIUEO'
    
    for(var i=0; i<string.length; i++){
        var checkVocal=false
        for(var j=0; j<vokal.length; j++){
            if(string[i] == vokal[j]) checkVocal=true
        }
        if(!checkVocal)
        return false
    }
    return true
}
console.log(checkVocal('iueoaAAaAA'))
console.log(checkVocal('iuesdoaAAasfaAA'))