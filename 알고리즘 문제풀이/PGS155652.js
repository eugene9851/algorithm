//String.fromCharCode(숫자)
//알파벳.charCodeAt()
//97~122

function solution(string, skip, initialIndex) {
  //skip해야하는 아스키코드 배열
  const skipCode = new Set(skip.split('').map(char => char.charCodeAt()))

  let result = ""

  for(const char of string) {
    let codeNum = char.charCodeAt() //각 알파벳의 아스키코드
    let index = initialIndex
    let nextCharCode = codeNum

    for(let i = 1; i <= index; i++) {
      nextCharCode++
      if(nextCharCode > 122) nextCharCode = 97
      while(skipCode.has(nextCharCode)) {
        nextCharCode++
        if(nextCharCode > 122) nextCharCode = 97
      }
    }
    result += String.fromCharCode(nextCharCode)
  }
  return result
}

s = "aukks"
skip = "wbqd"
index = 5

console.log(solution(s, skip, index))