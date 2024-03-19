//String.fromCharCode(숫자)
//알파벳.charCodeAt()
//97~122

function solution(string, skip, initialIndex) {
  //skip해야하는 아스키코드 배열
  const skipCode = skip.split('').map((skipChar) => {
    return skipChar.charCodeAt()
  })

  const resultArray = string.split('').map((char) => {
    const codeNum = char.charCodeAt() //각 알파벳의 아스키코드

    let index = initialIndex

    //현재 알파벳과 index만큼 뒤의 알파벳 사이에 skipCode가 있으면 건너뛰기(= index++)
    skipCode.forEach((code) => {
      if(codeNum < code && code <= codeNum + index) index++
    })

    //resultCode가 122(z)보다 크면 26씩 빼기
    let resultCode = codeNum + index
    while(resultCode > 122) {
      resultCode -= 26
    }
    return String.fromCharCode(resultCode)

  })
  return resultArray.join('')
}

s = "aukks"
skip = "wbqd"
index = 5

console.log(solution(s, skip, index))