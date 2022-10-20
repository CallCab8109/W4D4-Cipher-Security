const letterList = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

function decode (str) {
    //take the number off of the string
    let num = +str[0]
    //loop through each letter in the string and find it in the array, find index in letter array
    let answer = ''

    str = str.toLowerCase()

    for(let i = 1; i < str.length; i++ ) {
            let origIndex = letterList.indexOf(str[i])

            let newIndex = origIndex + num

            if (newIndex + 1 > 26) {
                newIndex = (newIndex + 1) % 26 - 1
            }

            answer += letterList[newIndex]
    }
    return answer
}



function encode (str) {
    //take the number off of the string
    let num = +str[0]
    //loop through each letter in the string and find it in the array, find index in letter array
    let answer = ''

    str = str.toLowerCase()

    for(let i = 1; i < str.length; i++ ) {
            let origIndex = letterList.indexOf(str[i])

            let newIndex = origIndex - num

            if (newIndex + 1 > 26) {
                newIndex = (newIndex + 1) % 26 - 1
            }

            answer += letterList[newIndex]
    }
    return answer
}













console.log(decode("1b"))
console.log(decode("3ce"))
console.log(decode("2fcjjm"))
console.log(encode("2hello"))