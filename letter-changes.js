
//program to change letters

function letterChanges(str) {
    console.log(object)
    const vowelArr = ["a","e","i","o","u"]
    const k = 1; // key encryptor
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz".split("") //26 char
    strArr = str.split("")
   
    const strArrMap = strArr.map((char) => {

        const j = englishAlphabet.indexOf(char)
        if (j >= englishAlphabet.length - k) {
            const f = (j + k) % englishAlphabet.length
            char = englishAlphabet[f]
            return englishAlphabet[f]
        }
        else {
            char = englishAlphabet[j + k]
            return englishAlphabet[j + k]
        }

        // console.log(strArr)
    })

    strArrVowel = strArrMap.map((char)=>{ //to capitalize the vowel
        if (vowelArr.includes(char)) {
            char.toUppercase
            return char
        }
    })
    console.log(strArrMap)

    console.log(strArrVowel)

}// end of function
str = "hello*3" //Ifmmp*3
letterChanges(str)
